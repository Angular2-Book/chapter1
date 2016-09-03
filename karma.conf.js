module.exports = function (config) {

    config.set({
        basePath: '',
        files: [
            // System.js for module loading
            'node_modules/systemjs/dist/system.src.js',
            // Polyfills
            'node_modules/core-js/client/shim.js',
            'node_modules/reflect-metadata/Reflect.js',
            // zone.js
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',
            // RxJs
            {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false},
            // Paths loaded via module imports:
            // Angular itself
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},
            {pattern: 'systemjs.config.js', included: false, watched: false},            
            'karma-test-shim.js',
            // transpiled application & spec code paths loaded via module imports
            {pattern: 'app/test/**/*spec.js', watched: true, included: false},
            {pattern: 'app/**/*.js', watched: true, included: false}
            
        ],
        // Proxied base paths for loading assets
        proxies: {
            // required for component assets fetched by Angular's compiler
            "/app/": "/base/app/"
        },
        exclude: [
        ],
        autoWatch: true,
        frameworks: [
            'jasmine'
        ],
        browsers: [
            "Chrome",
            "Firefox"
        ],
        plugins: [
            "karma-junit-reporter",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine",
            "karma-ng-html2js-preprocessor",
            "karma-coverage"
        ],
        preprocessors: {
            'app/test/**/*Spec.js': ['coverage']
        },
        reporters: [
            'progress', 'coverage'
        ],
        // HtmlReporter configuration
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
        
    })
}