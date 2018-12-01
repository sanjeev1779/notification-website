import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSigninComponent } from './user-signin/user-signin.component';


const routes: Routes = [
	{ path: 'signin', component: UserSigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
