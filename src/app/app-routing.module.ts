import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ExperienceComponent } from './components/pages/experience/experience.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ImDeveloperComponent } from './components/common/im-developer/im-developer.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent, children: [
    { path: '', component: ImDeveloperComponent }
  ] },
  { path: 'sobre', component: AboutComponent },
  { path: 'habilidades', component: SkillsComponent },
  { path: 'experiencias', component: ExperienceComponent },
  { path: 'projetos', component: ProjectsComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }