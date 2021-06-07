import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/services/user.service';

@Component({
  selector: 'r-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginPageTitle: string = "Login";

  public userName:string = "";
  public password: string = "";

  public constructor(private userService: UserService) { }

  public HandleEnterKeyPress(): void {
    // clear text boxes
    this.LogIn();
  }

  public HandleLoginClick(): void {
    this.LogIn();
  }

  private LogIn(): void {

    alert(this.userName);

    let loginSuccessful = this.userService.LogInUser(this.userName, this.password);

    if (loginSuccessful)
    {
      alert("whoopee");
    }
    else
    {
      alert("gwan away");
    }
  }
}
