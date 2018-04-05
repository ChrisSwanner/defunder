import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AuthService, ProjectService]
})
export class AdminComponent {

  projects: FirebaseListObservable<any[]>;
  projectDisplay;

  constructor(private authService: AuthService, private projectService: ProjectService, private router: Router) { }

  ngOnInt() {
    this.projectService.getProjects().subscribe(dataLastEmittedFromObserver => {
      this.projectDisplay = dataLastEmittedFromObserver;
      console.log(this.projectDisplay)
    })
      this.projects = this.projectService.getProjects();
    }
  }

