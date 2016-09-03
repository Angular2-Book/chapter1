System.register(['../../services/hello.service', '@angular/core/testing', '@angular/http', "@angular/http/testing"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hello_service_1, testing_1, http_1, testing_2, testing_3;
    return {
        setters:[
            function (hello_service_1_1) {
                hello_service_1 = hello_service_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
                testing_3 = testing_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            }],
        execute: function() {
            describe('Smoke test', function () {
                it('should run a passing test', function () {
                    expect(true).toEqual(true);
                });
            });
            describe('HelloService', function () {
                var testResponse = {
                    message: "test one"
                };
                beforeEach(function () {
                    testing_3.TestBed.configureTestingModule({
                        providers: [
                            {
                                provide: http_1.Http, useFactory: function (backend, defaultOptions) {
                                    return new http_1.Http(backend, defaultOptions);
                                }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                            },
                            { provide: hello_service_1.HelloService, useClass: hello_service_1.HelloService },
                            { provide: testing_2.MockBackend, useClass: testing_2.MockBackend },
                            { provide: http_1.BaseRequestOptions, useClass: http_1.BaseRequestOptions }
                        ]
                    });
                });
                it('should get message', testing_1.inject([testing_2.MockBackend, hello_service_1.HelloService], function (mockBackend, service) {
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: testResponse
                        })));
                    });
                    service.getHello().subscribe(function (res) {
                        expect(res).toBe("test one");
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=hello.service.spec.js.map