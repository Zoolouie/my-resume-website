import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    TechnicalSkillsComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent, TechnicalSkillsComponent]
})
export class AppModule { }
