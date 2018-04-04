import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CrudComponent } from './crud/crud.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'projects',
        component: AllProjectsComponent
    },
    {
        path: 'crud',
        component: CrudComponent
    },
    {
        path: 'details',
        component: ProjectDetailComponent
    }
];