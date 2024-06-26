import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './dashboard/registro/registro.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { AlumnoComponent } from './dashboard/alumno/alumno.component';
import { HorarioComponent } from './dashboard/horario/horario.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'alumno',
        component: AlumnoComponent
    },
    {
        path: 'horario',
        component: HorarioComponent
    },


    {

        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
