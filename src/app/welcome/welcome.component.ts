import { Component, OnInit } from '@angular/core';
import { AllProjectsComponent } from '../all-projects/all-projects.component';
import { ProjectService } from '../project.service'; 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [AllProjectsComponent, ProjectService]
})
export class WelcomeComponent implements OnInit {
  projectDisplay;
  projects;
  constructor(private allProjectsComponent: AllProjectsComponent, private projectService: ProjectService) { }
  ngOnInit() {
    this.projectService.getProjects().subscribe(dataLastEmittedFromObserver => {
      this.projectDisplay = dataLastEmittedFromObserver;
      this.projects = this.projectDisplay;
  })
}
}
