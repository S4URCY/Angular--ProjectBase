import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PerfilComponent } from './perfil.component';
import { UserRoutes } from './perfil.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(UserRoutes),

    ],
    declarations: [PerfilComponent]
})

export class PerfilModule {}
