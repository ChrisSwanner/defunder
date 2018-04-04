import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders }  from '@angular/core';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';

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
        path: 'details/:id',
        component: ProjectDetailComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardService]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
