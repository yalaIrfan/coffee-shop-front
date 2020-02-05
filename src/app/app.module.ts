import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewsService } from './shared/services/reviews.service';
import { UserService } from './shared/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './shared/auth-guard.service';
import { TokenService } from './shared/services/token.service';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/jwt.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    AllReviewsComponent,
    SignupComponent,
    LoginComponent,
    AddreviewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,ToastrModule.forRoot({timeOut: 7000}) 
  ],
  providers: [ReviewsService, UserService, AuthGuardService, TokenService, AuthService
    , { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
