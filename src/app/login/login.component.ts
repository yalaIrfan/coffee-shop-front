import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { TokenService } from '../shared/services/token.service';
import { EventEmitter } from 'events';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myevent: EventEmitter = new EventEmitter();
  constructor(private fb: FormBuilder,
    private userService: UserService, private token: TokenService,
    public route: Router) { }
  rForm: FormGroup;
  ngOnInit() {
    this.rForm = this.fb.group({
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(50)
      ])],
      'password': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ])]
    });
  }

  login() {
    if (this.rForm.valid) {
      this.userService.login(this.rForm.value).then((res) => {
        this.token.setToken(res)
        // window.sessionStorage.setItem('userId',res['userId'])
        this.rForm.reset();
        this.route.navigate(['/allReviews'])
        console.log(this.token.isLoggedIn)
      })
    }

  }

}
