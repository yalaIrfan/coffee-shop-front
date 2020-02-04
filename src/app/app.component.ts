import { Component } from '@angular/core';
import { TokenService } from './shared/services/token.service';
import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffee-shop-front';
  // isLoggedIn: Boolean = false;
  constructor(private token: TokenService, private user: UserService, public route: Router) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.token.getToken()
  }
  //call service to load the static an init app
  logout() {
    this.user.logout(window.sessionStorage.getItem('auth_token')).then((res) => {
      // window.sessionStorage.removeItem('auth_token')
       this.token.removeItem()
       this.route.navigate(['/'])
    })
   .catch(err => { console.error(err) })
  }
}
