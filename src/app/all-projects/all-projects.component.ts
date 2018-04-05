import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
  providers: [ProjectService]
})
export class AllProjectsComponent {
   addingProject: boolean = false;
  public projectFilter: boolean = false;
  public isFiltering: boolean = false;
  public normal: boolean = true;

  constructor(private router: Router, private projectService: ProjectService) { }

  public projects: FirebaseListObservable<any[]>;
  projectDisplay;
  
  submitRedirect() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe(dataLastEmittedFromObserver => {
      this.projectDisplay = dataLastEmittedFromObserver;
    })
    this.projects = this.projectService.getProjects();
  }

    addNewProject() {
      this.addingProject = true;
      this.normal = false;
      this.isFiltering = false;
    }

    submitForm(title: string,  founder: string,  description: string,  moneyStart: number,  fundsUse: string,  rewards: string,  projectType: string) {
      let newProject: Project = new Project(title, founder, description, moneyStart,fundsUse,rewards, projectType)
      this.projectService.addProject(newProject);
      this.addingProject = false;
      this.submitRedirect();
    }
  }
