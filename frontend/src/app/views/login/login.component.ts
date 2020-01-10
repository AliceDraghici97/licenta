import { Component } from '@angular/core';
import { User } from '../../models/User';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user: User = {
    email: '',
    parola: ''
  };
  nr: number;
  constructor(private service: LoginService, private router: Router) {
  }

  onClick() {
    this.user.email = (<HTMLInputElement>document.getElementById("email")).value;
    this.user.parola = (<HTMLInputElement>document.getElementById("parola")).value;
    if (this.user.email && this.user.parola) {
      this.service.getUser(this.user.email, this.user.parola).subscribe((count) => {
        this.nr = count[0].count;
        if (this.nr == 1) {
          this.router.navigate(['/base/home_page']);
          console.log(this.nr);
        } else {
          alert("Utilizator inexistent!");
        }
      });
    } else {
      alert("Completati toate campurile!");
    }
  }
}

