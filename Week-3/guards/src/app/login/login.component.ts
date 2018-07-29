import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="home">
    <h1>Please login here</h1>
    <div class="container">

      <form class="form-signin">
        <h2 class="form-signin-heading">Sign In Form</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div>
    </div>
  `,
  styles: [`
    .home {
      background-color: lightgray;
      margin: 5% 15% 0 15%;
      padding: 50px 100px 100px 100px;
    }
    h1{
      margin: 0 0 30px 0;
    }
    p{
      margin: 30px 0 0 0;
    }
    input{
      margin: 20px;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}