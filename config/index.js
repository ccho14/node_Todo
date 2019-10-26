var configValues = require('./config');

module.exports = {

    //mongodb+srv://sc_user1:<password>@sccluster-1n1b0.mongodb.net/test?retryWrites=true&w=majority

    getDbConnectionString: function () {
        return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd +
            '@sccluster-1n1b0.mongodb.net/nodetodo?retryWrites=true&w=majority';

    }

}