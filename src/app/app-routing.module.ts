import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Shared/Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ViewResultComponent } from './Components/view-result/view-result.component';
import { SettingsComponent } from './Components/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'view', component: ViewResultComponent },
  { path: '**', redirectTo: '',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
