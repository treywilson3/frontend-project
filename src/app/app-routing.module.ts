import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {WorkoutsComponent} from "./workouts/workouts.component";
import {SignupComponent} from "./signup/signup.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'workouts', component: WorkoutsComponent},
  { path: 'sign-up', component: SignupComponent}
  // { path: 'recipes', component: RecipesComponent, children: [
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component: RecipeEditComponent },
  //   { path: ':id', component: RecipeDetailComponent },
  //   { path: ':id/edit', component: RecipeEditComponent },
  // ] },
  // { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
