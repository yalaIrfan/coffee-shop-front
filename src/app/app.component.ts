import { Component } from '@angular/core';
import { TokenService } from './shared/services/token.service';
import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffee-shop-front';
  // isLoggedIn: Boolean = false;
  constructor(public token: TokenService, private user: UserService, public route: Router,public toastr:ToastrService) {

  }
  userId=''
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.token.getToken()
    console.log(this.token.userId)
    
  }
  //call service to load the static an init app
  logout() {
    this.user.logout(sessionStorage.getItem('auth_token')).then((res) => {
      // window.sessionStorage.removeItem('auth_token')
      this.toastr.success('User logged out.','Success')
       this.token.removeItem()
       this.route.navigate(['/'])
    })
    .catch(err=>{
      this.toastr.error('Oops! something went wrong while logout.','Failed')
      console.error(err)
  })
  }
}
