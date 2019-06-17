import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'users', loadChildren: './user/user.module#UserModule' },
            { path: 'consults', loadChildren: './consult/consult.module#ConsultModule' },
            { path: 'collections', loadChildren: './collections/collections.module#CollectionsModule' },
            { path: 'geolocalitation', loadChildren: './geolocalitation/geolocalitation.module#GeolocalitationModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
