import {Routes} from '@angular/router';


import {LockComponent} from './lock/lock.component';
import {LoginComponent} from './login/login.component';
import {AuthLayoutComponent} from './auth/auth-layout.component';

export const PagesRoutes: Routes = [{
    path: '', component: AuthLayoutComponent, children: [
        {path: 'login', component: LoginComponent, data: {title: 'Login'}},
        {path: 'lock', component: LockComponent, data: {title: 'Esqueci minha senha'}},
        // {path: 'register', component: RegisterComponent},
        {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
}];
