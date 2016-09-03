import { HelloService } from '../../services/hello.service';
import { inject } from '@angular/core/testing';
import { Http, ConnectionBackend, BaseRequestOptions, XHRBackend, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from "@angular/http/testing";
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Smoke test', () => {
    it('should run a passing test', () => {
        expect(true).toEqual(true);
    });
});

describe('HelloService', function() {
    let testResponse =
        {
            message: "test one"
        };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }, deps: [MockBackend, BaseRequestOptions]
                },
                { provide: HelloService, useClass: HelloService },
                { provide: MockBackend, useClass: MockBackend },
                { provide: BaseRequestOptions, useClass: BaseRequestOptions }
            ]
        });
    });

    it('should get message', inject([MockBackend, HelloService], (mockBackend, service) => {       
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: testResponse
                    }
                    )));
            });
        service.getHello().subscribe((res: Hello[]) => {
            expect(res).toBe("test one");
        });
    }));
});




