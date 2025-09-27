import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Not403Component } from './not-403/not-403.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { activeGuard } from './guard/active.guard';
import { certGuard } from './guard/cert.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path: 'admin',
        component: LayoutComponent,
<<<<<<< HEAD
      // canActivate: [authGuard,activeGuard,certGuard],
=======
       // canActivate: [authGuard,activeGuard,certGuard],
>>>>>>> 204913c9cfef2789a83c43392229eda12de0cf49
        loadChildren: () => import('./admin/admin.routes').then(m=>m.ADMIN_ROUTES)
    },
    {
        path:'not-403',
        component: Not403Component
    },{
      path: '**',
      redirectTo: 'login'

    }
];
