import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './component/all-users/all-users.component';
import { CreateUpdateUserComponent } from './component/create-update-user/create-update-user.component';

const routes: Routes = [
  { path: '', component: AllUsersComponent },
  { path: 'usuario', component: CreateUpdateUserComponent },
  { path: 'usuario/:id', component: CreateUpdateUserComponent },

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
