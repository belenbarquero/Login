import { Component } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private router: Router) { }

  /**
   * onLogin
   */
  public onLogin() {
    if (this.user === 'admin@admin.com' && this.password === 'test123') {
      this.router.navigate(['/home'])
    }
  }
}
