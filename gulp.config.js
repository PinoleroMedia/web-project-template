module.exports = function () {
    var client = './';
    var sourceDirectory = 'app/';
    var indexHtml = 'index.html';

    var config = {
        
        indexHtml: indexHtml,

        sourceDirectory: sourceDirectory,

        /* The index html here anything you install with bower will be injected
         * with wiredep and the gulp inject task
         */
        index: sourceDirectory + indexHtml,

        /* Include or exlude here all the js that you want to be 
        * compressed and injected into you base.html
        */
        js: [
            sourceDirectory + 'scripts/**/*.js',
        ],

        /* Include or exlude here all the css that you want to be 
        * compressed and injected into you base.html
        */
        css: [
             sourceDirectory + 'styles/**/*.css'
        ],
        
        /* 
         * These are the settings for you bower configuration
         */
        bower: {
            json: require('./bower.json'),
            directory: sourceDirectory + 'lib/',
            //ignorePath: '../static/',

            //exclude: [ ],
        },
        /* 
        * These are the settings for you inject css
        */
        injectCssOptions: {
            ignorePath: '/app/',
            transform: function (filepath) {
                return '<link rel="stylesheet" href="' + filepath.replace('/', '') + '">';
            }
        },

        /* 
       * These are the settings for you inject css
       */
        injectJsOptions: {
            ignorePath: '/app/',
            transform: function (filepath) {
                return '<script type="text/javascript" src="' + filepath.replace('/', '') + '"></script>';
            }
        }
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

    //config.getInjectDefaultCssOptions = function () {
    //    var options = {
    //        ignorePath: config.injectCssOptions.ignorePath,
    //        transform: config.injectCssOptions.transform,
    //    };
    //    return options;
    //};

    config.getInjectDefaultJsOptions = function () {
        var options = {
            ignorePath: config.injectJsOptions.ignorePath,
            transform: config.injectJsOptions.transform,
        };
        return options;
    };
    
    return config;
}