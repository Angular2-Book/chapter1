import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { HelloService }          from './services/hello.service';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        HelloService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

