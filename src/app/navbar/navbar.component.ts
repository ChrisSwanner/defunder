import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGuardService } from '../auth-guard.service';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService, AuthGuardService]
})
export class NavbarComponent{
  user;
  private LoggedOut: Boolean;
  private LoggedIn: Boolean;
  private admin: Boolean;

  private userName: String;

  constructor(public authService: AuthService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.LoggedOut = true;
        this.admin = false;
        this.LoggedIn = false;
      } else {
        this.LoggedOut = false;
        this.admin = true;
        this.LoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login() {
    this.authService.login();
    this.LoggedOut = false;
    this.admin = true;
    this.LoggedIn = true;
  }

  logout() {
    this.authService.logout();
    this.LoggedOut = true;
    this.admin = false;
    this.LoggedIn = false;
  }
}
