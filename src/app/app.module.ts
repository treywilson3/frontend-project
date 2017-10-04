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
import { ToolsComponent } from './tools/tools.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ChestComponent } from './workouts/chest/chest.component';
import { ShouldersComponent } from './workouts/shoulders/shoulders.component';
import { BackComponent } from './workouts/back/back.component';
import { LegsComponent } from './workouts/legs/legs.component';
import { ArmsComponent } from './workouts/arms/arms.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SidebarComponent,
    ArticlesComponent,
    WorkoutsComponent,
    LandingPageComponent,
    ToolsComponent,
    RecipesComponent,
    ChestComponent,
    ShouldersComponent,
    BackComponent,
    LegsComponent,
    ArmsComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ArticlesService, WorkoutsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
