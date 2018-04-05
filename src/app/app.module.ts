import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { fireBaseConfig } from './api-keys';
import { routing } from './app.routing';
import { AuthGuardService } from './auth-guard.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './app.routing';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';

export const firebaseMasterConfig = {
  apiKey: fireBaseConfig.apiKey,
  authDomain: fireBaseConfig.authDomain,
  databaseURL: fireBaseConfig.databaseURL,
  storageBucket: fireBaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectDetailComponent,
    AllProjectsComponent,
    NavbarComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseMasterConfig),
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
