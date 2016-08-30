import { Component } from '@angular/core';
import { HelloService } from './services/hello.service';
import { Hello } from './hello';

@Component({
  selector: 'hello-world-app',
  template: '<h1>{{hello}}</h1>'  
})
export class AppComponent {   
    private hello: Hello; 
    constructor(       
        private _helloService: HelloService
    ) { };  
     ngOnInit() {
         this._helloService.getHello()
                .subscribe(
                res => this.hello = res,
                error => this.error(error));
     }
     error(err) {
        console.log("service error: " + err);
    }   
}
