import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SidebarModule} from './layouts/shared/sidebar/sidebar.module';
import {NavbarModule} from './layouts/shared/navbar/navbar.module';
import {FooterModule} from './layouts/shared/footer/footer.module';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import { Page404Component } from './layouts/shared/page404/page404.component';
import {FixedPluginModule} from './layouts/shared/fixedplugin/fixedplugin.module';


@NgModule({
    declarations: [
        AdminLayoutComponent,
        Page404Component,
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        AdminRoutingModule,

    ]
})
export class AdminModule { }
