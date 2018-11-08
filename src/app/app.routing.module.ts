import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './services/route-guards/auth-guard/auth-guard.service';
import { NoAuthGuardService } from './services/route-guards/no-auth-guard/no-auth-guard.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: './core/core.module#CoreModule'
        //canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        loadChildren: './auth-modules/login/login.module#LoginModule',
        //canActivate: [NoAuthGuardService]
    },
    { path: '**', redirectTo: '' }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
