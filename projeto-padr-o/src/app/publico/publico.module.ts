import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PagesRoutes } from './publico.routing';


import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import {AuthLayoutComponent} from './auth/auth-layout.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {LoginService} from '../shared/service/login/login.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forChild(PagesRoutes),

    ],
    declarations: [
        LoginComponent,
        LockComponent,
        AuthLayoutComponent,
    ],
})

export class PublicoModule {}
