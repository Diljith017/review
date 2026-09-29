import { Routes } from '@angular/router';
import {Home} from './home/home'
import {Login} from './login/login'

import { Auth } from './auth';

export const routes: Routes = [

{path:'home',component:Home,canActivate:Auth},
{path:'login',component:Login},
// {path:'**',Component:notfound}

];
