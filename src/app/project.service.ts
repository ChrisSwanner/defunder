
import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class ProjectService {
    constructor(private database: AngularFireDatabase) {
        this.projects = database.list('projects');
    }

    projects: FirebaseListObservable<any[]>;


    getProjects() {
        return this.projects;
    }

    addProject(newProject: Project) {
        this.projects.push(newProject);
    }

    getProjectById(projectId: string) {
        return this.database.object('projects/' + projectId);
    }

    updateDefunding(localUpdatedProject) {
        let projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
        projectEntryInFirebase.update({moneyStart: localUpdatedProject.moneyStart});
    }

    deleteProject(localProjectToDelete) {
        let projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
        projectEntryInFirebase.remove();
        this.getProjectById(localProjectToDelete.moneyStart).remove();
    }

    updateProject(localProjectToUpdate) {
        let projectEntryInFirebase = this.getProjectById(localProjectToUpdate.$key);
        projectEntryInFirebase.update({title: localProjectToUpdate.title,
        founder: localProjectToUpdate.founder,
        description: localProjectToUpdate.description,
        moneyStart: localProjectToUpdate.moneyStart,
        fundsUse: localProjectToUpdate.fundsUse,
        rewards: localProjectToUpdate.rewards,
        projectType: localProjectToUpdate.projectType})
    }
}