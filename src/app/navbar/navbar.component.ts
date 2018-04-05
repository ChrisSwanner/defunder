import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGuardService } from '../auth-guard.service';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { Project } from '../models/project.model';
import { AllProjectsComponent } from '../all-projects/all-projects.component';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService, AuthGuardService, AllProjectsComponent, ProjectService]
})
export class NavbarComponent implements OnInit{
  user;
  private LoggedOut: Boolean;
  private LoggedIn: Boolean;
  private admin: Boolean;
  private userName: String;
  

  constructor(public authService: AuthService, private allProjectsComponent: AllProjectsComponent, private projectService: ProjectService) {
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

  ngOnInit() {
    this.projectService.getProjects().subscribe(dataLastEmittedFromObserver => {
      this.projectDisplay = dataLastEmittedFromObserver;

  })
  this.allProjectsComponent.projects = this.projectService.getProjects();
}


  
  private projectDisplay = this.allProjectsComponent.projectDisplay;
  public productArray;

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

  charityFilter() {
   
    this.productArray = [];

    for (let i = 0; i < this.projectDisplay.length; i++) {
      if (this.projectDisplay[i].projectType === "charity") {
        this.productArray.push(this.projectDisplay[i]);
      } else {
        return null;
      }
    }
  }

  ideaFilter() {
    
   
    this.productArray = [];

    for (let i = 0; i < this.projectDisplay.length; i++) {
      if (this.projectDisplay[i].projectType === "idea") {
        this.productArray.push(this.projectDisplay[i]);
      } else {
        return null;
    }
  }
}

  productFilter() {
    this.productArray = [];
    for (let i = 0; i < this.projectDisplay.length; i++) {
      if (this.projectDisplay[i].projectType != "idea" && this.projectDisplay[i].projectType != "charity") {
        this.productArray.push(this.projectDisplay[i]);
      } else {
        console.log("null")
        
    }
  }
  
}

}