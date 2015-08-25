module.exports = function () {
    var client = './';
    var sourceDirectory = 'app/';
    var indexHtml = 'index.html';

    var config = {
        
        indexHtml: indexHtml,

        sourceDirectory: sourceDirectory,

        /* The base template here anything you install with bower will be injected
         * with wiredep
         */
        index: sourceDirectory + indexHtml,
        
        /* 
         * These are the settings for you bower configuration
         */
        bower: {
            json: require('./bower.json'),
            directory: sourceDirectory + 'lib/',
            //ignorePath: '../static/',

            //exclude: [ ],
        },

    }
    
    config.getWiredepDefaulOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            //ignorePath: config.bower.ignorePath,
            //fileTypes: config.bower.fileTypes,
            //exclude: config.bower.exclude,
        };
        return options;
    };
    
    return config;
}