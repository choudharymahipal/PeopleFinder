import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { LoginComponent } from './Shared/Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthService } from './Shared/Services/auth.service';
import { CommonService } from './Shared/Services/common.service';
import { ProfileComponent } from './Components/profile/profile.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';
import { ViewResultComponent } from './Components/view-result/view-result.component';
import { RegisterComponent } from './Shared/Components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './Shared/Components/about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    ChangePasswordComponent,
    SearchResultComponent,
    ViewResultComponent,
    RegisterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [AuthService, CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
