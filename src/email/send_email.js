const nodemailer = require("nodemailer");
require('dotenv').config();

async function main(req, res, client) {
    let transporter = nodemailer.createTransport({
        host: process.env.NM_HOST,
        port: process.env.NM_PORT,
        secure: process.env.NM_SECURE == "true",
        auth: {
            user: process.env.NM_USER,
            pass: process.env.NM_PASSWORD,
        },
    });
    console.log(transporter)

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <sujalchalke089@gmail.com>',
        to: "subham320999@gmail.com, gautamdakua877@gmail.com ,pawarrahul18220@gmail.com",
        subject: "For Testing",
        // text: "Hello Bro",
        html: "<i>Hello world?</i>",
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.send("Hello");
   
}



module.exports = {
    main: main
}