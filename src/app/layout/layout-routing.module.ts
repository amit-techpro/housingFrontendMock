import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutRootComponent } from './layout-root/layout-root.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutRootComponent,
        children: [
            {
                path: '',
                loadChildren: './modules/admin/admin.module#AdminModule',
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
