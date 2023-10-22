import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
})
export class LogowanieComponent implements OnInit {

  formData = {
    username: '',
    password: ''
  }

  loginMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  logowanie() {
    if(this.formData.username === 'admin' && this.formData.password === 'admin') {
      this.loginMessage = 'Zalogowano pomyślnie';
    } else {
      this.loginMessage = 'Błąd logowania. Sprawdź dane.';
    }
  }

}
