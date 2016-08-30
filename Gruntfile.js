module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        ts: {
            default: {
                src: [
                    "./ts-app/**/*.ts"
                ],
                outDir: "app"
            },
            options: {
                fast: 'never',
                verbose: true,
                module: 'system',
                moduleResolution: 'node',
                experimentalDecorator: true,
                emitDecoratorMetadata: true,
                noImplicitAny: false,
                target: 'es5',
                failOnTypeErrors: false
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("angular2-compile", ["ts"]);
};
