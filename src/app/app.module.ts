import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/components/header/header.component';
import { ResumeTemplateComponent } from './components/components/resume-template/resume-template.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ResumeBuilderComponent } from './pages/resume-builder/resume-builder.component';
import { ResumeComponent } from './models/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeTemplateComponent,
    HomeComponent,
    ResumeBuilderComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
