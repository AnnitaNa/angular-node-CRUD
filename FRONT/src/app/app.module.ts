import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateUserComponent } from './component/create-update-user/create-update-user.component';
import { AllUsersComponent } from './component/all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateUserComponent,
    AllUsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
