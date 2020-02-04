import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { AuthGuardService } from './shared/auth-guard.service';


const routes: Routes = [
  { path: '',   redirectTo: '/allReviews', pathMatch: 'full' },
  { path: 'allReviews', component: AllReviewsComponent },
  { path: 'signup',      component: SignupComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'addReview',      component: AddreviewComponent , canActivate: [AuthGuardService ] },
  { path: 'allReviews/:id',    component: AllReviewsComponent , canActivate: [AuthGuardService ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// {
//   path: 'heroes',
//   component: HeroListComponent,
//   data: { title: 'Heroes List' }
// },
// { path: '',
//   redirectTo: '/heroes',
//   pathMatch: 'full'
// },