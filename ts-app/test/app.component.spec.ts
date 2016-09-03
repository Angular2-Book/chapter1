import { AppComponent } from '../app.component';
import { HelloService } from '../services/hello.service';
import { MockHelloService } from '../services/mock/hello.mock.service';
import { inject } from '@angular/core/testing';
import { Http} from '@angular/http';
import { async,  TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true);
  });
});

describe('AppComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [AppComponent],
     providers: [
                    { provide: HelloService, useClass: MockHelloService },
                   //{ provide: Http, useClass: Http }                    
                ]
    });
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

 
});
