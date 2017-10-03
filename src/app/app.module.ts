import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticlesComponent } from './articles/articles.component';
import {ArticlesService} from "./articles/articles.service";
import { WorkoutsComponent } from './workouts/workouts.component';
import {WorkoutsService} from "./workouts/workouts.service";
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SidebarComponent,
    ArticlesComponent,
    WorkoutsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ArticlesService, WorkoutsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
