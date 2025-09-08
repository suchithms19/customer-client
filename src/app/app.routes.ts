import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Customer } from './components/customer/customer';
import { Supplier } from './components/supplier/supplier';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'customer',
        component: Customer
    },
    {
        path: 'supplier',
        component: Supplier
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
