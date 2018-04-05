import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AllProjectsComponent } from '../all-projects/all-projects.component';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../models/project.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css'],
  providers: [NavbarComponent, AllProjectsComponent, ProjectService]
})
export class IdeaComponent implements OnInit {

  constructor(private navBar: NavbarComponent, private allProjectsComponent: AllProjectsComponent, private projectService: ProjectService) { }

  projects = this.allProjectsComponent.projects;
  public filteredProjects = [];
  projectDisplay;
  public empty: Boolean = true;
  public productArray;
    ngOnInit() {
      this.projectService.getProjects().subscribe(dataLastEmittedFromObserver => {
        this.projectDisplay = dataLastEmittedFromObserver;
        for (let i = 0; i < this.projectDisplay.length; i++) {
          if (this.projectDisplay[i].projectType != "product" && this.projectDisplay[i].projectType != "charity") {
            this.filteredProjects.push(this.projectDisplay[i]);
          } else  {
            this.empty = false;
            console.log("null")
            
        }
      }
    })
  }
}
      
