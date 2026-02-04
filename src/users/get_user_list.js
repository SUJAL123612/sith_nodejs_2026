function main(req, res, client) { 

    // Query params
    let search_text = req.query.search_text ? req.query.search_text : null;
    let sort_by = req.query.sort_by ? req.query.sort_by : "id";
    let sort_order = req.query.sort_order ? req.query.sort_order : "DESC";

    // Sort order cleanup
    if (["asc", "ASC"].includes(sort_order)) { 
        sort_order = "ASC";
    } else {
        sort_order = "DESC";
    }

    // Pagination
    let skip_records = 0;
    let limit_records = -1;

    if (req.query.page_index && req.query.page_size) {
        try {
            skip_records = Math.abs((parseInt(req.query.page_index) - 1) * parseInt(req.query.page_size));
            limit_records = Math.abs(parseInt(req.query.page_size));
        }
        catch (err) {
            console.log("Error parsing page_index and page_size:", err);
            res.status(400).send({
                success: false,
                data: null,
                err: "Error parsing pagination params",
                err_id: "1000013"
            });
            return;
        }
    }

    // Base Condition
    let aux_condition = " WHERE is_obsolete = 0 ";

    // Search Condition
    if (![null, undefined, "", "null", "undefined"].includes(search_text)) {
        aux_condition += ` AND (
            user_name ILIKE '%${search_text}%' OR
            mobile ILIKE '%${search_text}%' OR
            email ILIKE '%${search_text}%' OR
            role ILIKE '%${search_text}%'
        )`;
    }

    const query = `
        SELECT 
            id,
            user_name,
            mobile,
            email,
            role,
            created_at
        FROM users
        ${aux_condition}
        ORDER BY ${sort_by} ${sort_order};
    `;

    client.query(query, [], (err, result) => {

        if (err) {
            console.log(err);
            res.status(400).send({
                success: false,
                data: null,
                err: err,
                err_id: "1000012"
            });
            return;
        }

        let fullData = result.rows;

        // Apply pagination on data
        let finalData = fullData;

        if (limit_records !== -1) {
            finalData = fullData.slice(skip_records, skip_records + limit_records);
        }

        res.status(200).send({
            success: true,
            total_records: fullData.length,
            data: finalData,
            err: null,
            err_id: null
        });
    });
}

module.exports = { 
main: main
};