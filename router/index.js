const pg_client = require('../config/postgres_config.js');
const mongo_client = require('../config/mongo_config.js');

module.exports = function(app, appEnv){
    console.log("routerindex ", appEnv);
    require('./users.js')(app, pg_client, appEnv);
    require('./file_system.js')(app,pg_client, appEnv);
    require('./email.js')(app, pg_client, appEnv);
    require('./movies.js')(app, mongo_client, appEnv);
    require('./guide.js')(app, mongo_client, appEnv);
};