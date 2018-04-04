import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CrudComponent } from './crud/crud.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectDetailComponent,
    CrudComponent,
    AllProjectsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
