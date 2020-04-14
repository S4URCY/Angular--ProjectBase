import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// tslint:disable-next-line:import-spacing
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routing';
import {MaterialModule} from './shared/material.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TokenInterceptor} from './shared/interceptor/jtw/jwt.interceptor';
import {ErrorInterceptor} from './shared/interceptor/error/error.interceptor';

@NgModule({
    imports:      [
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes, {
          useHash: true
        }),
        MaterialModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
