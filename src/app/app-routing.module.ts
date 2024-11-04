import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Shared/Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ViewResultComponent } from './Components/view-result/view-result.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { RegisterComponent } from './Shared/Components/register/register.component';
import { authGuard } from './Shared/Guards/auth.guard';
import { AboutComponent } from './Shared/Components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [authGuard],
  },
  { path: 'settings', component: SettingsComponent, canActivate: [authGuard] },
  { path: 'view', component: ViewResultComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
