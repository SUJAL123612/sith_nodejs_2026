const pg_client = require('../config/postgres_config.js');
const mongo_client = require('../config/mongo_config.js');

module.exports = function(app){
    require('./users.js')(app, pg_client);
    require('./file_system.js')(app,pg_client);
    require('./email.js')(app, pg_client);
    require('./movies.js')(app, mongo_client);
};