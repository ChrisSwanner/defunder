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

  constructor(private router: Router, private projectService: ProjectService) { }

  projects: FirebaseListObservable<any[]>;
  filteredProjects: Project[] = [];
  projectDisplay;
  


  ngOnInit() {
    this.projectService.getProjects().subscribe(dataLastEmittedFromObserver => {
      this.projectDisplay = dataLastEmittedFromObserver;
      console.log(this.projects)
    })
    this.projects = this.projectService.getProjects();
  }

    addNewProject() {
      this.addingProject = true;
    }


    filterProjects(projectType) {
      this.filteredProjects = [];
      this.projectFilter = true;
      for (let i = 0; i < this.projectDisplay.length; i++) {
        if (this.projectDisplay[i].projectType === projectType) {
          this.filteredProjects.push(this.projectDisplay[i]);
        }
      }
    }

    submitForm(title: string,  founder: string,  description: string,  moneyStart: number,  fundsUse: string,  rewards: string,  projectType: string) {
      let newProject: Project = new Project(title, founder, description, moneyStart,fundsUse,rewards, projectType)
      this.projectService.addProject(newProject);
    }
  }
