import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../models/project.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(
    private router: ActivatedRoute,
    private location: Location, 
    private projectService: ProjectService
  ) { }
  

  ngOnInit() {
    this.router.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    })
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

  defundProgressColor(projectToDisplay) {
    if (projectToDisplay.defunded = true) {
      return "defunded"
    }
    if (projectToDisplay.moneyStart >= (projectToDisplay.moneyStart * .75)) {
      return "75"
    } else if (projectToDisplay.moneyStart >= (projectToDisplay.moneyStart * .50)) {
      return "50"
    } else if (projectToDisplay.moneyStart >= (projectToDisplay.moneyStart * .25)) {
      return "25"
    } else if (projectToDisplay.moneyStart >= (projectToDisplay.moneyStart * .10)) {
      return "10"
    }
  }

  defundProjectBy100(projectToDisplay) {
    this.projectService.updateDefunding(projectToDisplay);
    if (projectToDisplay.moneyStart > 0) {
      projectToDisplay.moneyStart -= 100;
    } else if (projectToDisplay.moneyStart === 0) {
      alert("Defunded");
    }
  }

  defundProjectBy1000(projectToDisplay) {
    this.projectService.updateDefunding(projectToDisplay);
    if (projectToDisplay.moneyStart > 0) {
      projectToDisplay.moneyStart -= 1000;
    } else if (projectToDisplay.moneyStart === 0) {
      alert("Defunded");
    }
  }

  defundProjectBy10000(projectToDisplay) {
    this.projectService.updateDefunding(projectToDisplay);
    if (projectToDisplay.moneyStart > 0) {
      projectToDisplay.moneyStart -= 10000;
    } else if (projectToDisplay.moneyStart === 0) {
      alert("Defunded");
    }
  }

  defundProjectByAll(projectToDisplay) {
    this.projectService.updateDefunding(projectToDisplay);
    if (projectToDisplay.moneyStart > 0) {
      projectToDisplay.moneyStart -= projectToDisplay.moneyStart;
      alert("Defunded");
    } 
  }

  

}
