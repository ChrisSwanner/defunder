import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../models/project.model';
import { Router, ActivatedRoute, Params, } from '@angular/router';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectDisplay;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location, 
    private projectService: ProjectService,
    private authService: AuthService
    
  ) { }

  public admin: Boolean = this.authService.admin;
  

  ngOnInit() {
    console.log(this.admin);
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    })
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectDisplay = dataLastEmittedFromObserver;

    })
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
  defundRedirect() {
    this.router.navigate(['/'])
  }

  adminRedirect() {
    this.router.navigate(['/admin'])
  }

  defundProjectBy100(projectToDisplay) {
    if (projectToDisplay.moneyStart >= 100) {
      projectToDisplay.moneyStart -= 100;
      this.projectService.updateDefunding(projectToDisplay);
    } 
    if (projectToDisplay.moneyStart === 0 ) {
      alert("Defunded");
      this.projectService.deleteProject(projectToDisplay);
      this.defundRedirect();
    }
  }

  defundProjectBy1000(projectToDisplay) {
    if (projectToDisplay.moneyStart >= 1000) {
      projectToDisplay.moneyStart -= 1000;
      this.projectService.updateDefunding(projectToDisplay);
    } 
    if (projectToDisplay.moneyStart === 0) {
      alert("Defunded");
      this.projectService.deleteProject(projectToDisplay);
      this.defundRedirect();
    }
  }

  defundProjectBy10000(projectToDisplay) {
    if (projectToDisplay.moneyStart >= 10000) {
      projectToDisplay.moneyStart -= 10000;
      this.projectService.updateDefunding(projectToDisplay);
    } 
    if (projectToDisplay.moneyStart === 0) {
      alert("Defunded");
      this.projectService.deleteProject(projectToDisplay);
      this.defundRedirect();

    }
  }

  defundProjectByAll(projectToDisplay) {
    if (projectToDisplay.moneyStart > 0) {
      this.projectService.updateDefunding(projectToDisplay);
      projectToDisplay.moneyStart -= projectToDisplay.moneyStart;
      alert("Defunded");
      this.projectService.deleteProject(projectToDisplay);
      this.defundRedirect();

    }
  }

  delete(projectToDisplay) {
    this.projectService.deleteProject(projectToDisplay);
    this.adminRedirect();
  }

  update(projectToDisplay) {
    this.projectService.updateProject(projectToDisplay);
  }
}
