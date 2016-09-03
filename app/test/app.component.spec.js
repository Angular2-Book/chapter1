System.register(['../app.component', '../services/hello.service', '../services/mock/hello.mock.service', '@angular/core/testing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, hello_service_1, hello_mock_service_1, testing_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (hello_service_1_1) {
                hello_service_1 = hello_service_1_1;
            },
            function (hello_mock_service_1_1) {
                hello_mock_service_1 = hello_mock_service_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            }],
        execute: function() {
            describe('Smoke test', function () {
                it('should run a passing test', function () {
                    expect(true).toEqual(true);
                });
            });
            describe('AppComponent with TCB', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [app_component_1.AppComponent],
                        providers: [
                            { provide: hello_service_1.HelloService, useClass: hello_mock_service_1.MockHelloService },
                        ]
                    });
                });
                it('should instantiate component', function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
                });
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map