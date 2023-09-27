import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ExperienceComponent } from './components/pages/experience/experience.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ImDeveloperComponent } from './components/common/im-developer/im-developer.component';
import { BackgroundComponent } from './components/common/background/background.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { BackgroundInsideComponent } from './components/common/background-inside/background-inside.component';
import { CardProjectComponent } from './components/common/card-project/card-project.component';
import { BackgroundCardProjectComponent } from './components/common/background-cards/background-card-project.component';
import { CardExperienceComponent } from './components/common/card-experience/card-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ImDeveloperComponent,
    BackgroundComponent,
    SkillsComponent,
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
