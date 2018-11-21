import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ClickableLinkBoxComponent } from './clickable-link-box/clickable-link-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnicalSkillsComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    SocialMediaComponent,
    ClickableLinkBoxComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    AngularFontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent, TechnicalSkillsComponent]
})
export class AppModule { }
