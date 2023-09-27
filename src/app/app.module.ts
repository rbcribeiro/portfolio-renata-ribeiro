import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ImDeveloperComponent } from './components/im-developer/im-developer.component';
import { BackgroundComponent } from './components/background/background.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundInsideComponent } from './components/background-inside/background-inside.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { BackgroundCardProjectComponent } from './components/background-cards/background-card-project.component';
import { CardExperienceComponent } from './components/card-experience/card-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ImDeveloperComponent,
    BackgroundComponent,
    SkillsComponent,
    HeaderComponent,
    BackgroundInsideComponent,
    CardProjectComponent,
    BackgroundCardProjectComponent,
    CardExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
