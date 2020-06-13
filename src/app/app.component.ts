import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from './models/login';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Login Form';

  @ViewChild('f')
    form: any = {};
    login = new Login;
    submitted: boolean;
    showMsg: string = '';
    showpass: boolean;

    // regular expression for email format
    mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    FormLogin: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {

        this.showpass = false; // indicates show/hide password toggle
        this.submitted = false; // indicates whether login button have been clicked or not

        // build form group for validation checking
        this.FormLogin = new FormGroup({
            email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])),
            password: new FormControl('', Validators.required)
        });

    }

    userLogin() {
        this.submitted = true;
        if (this.FormLogin.valid) {
          console.log(this.submitted);

          // check user data
          if(this.login['email'] === 'usertest@gmail.com' && this.login['password'] === '12345678') { // condition if data login is valid
            Swal.fire({
              icon: 'success',
              html: 'You have login successfully!',
              confirmButtonText: 'OK',
              confirmButtonColor: '#3085d6',
              showClass: {
                popup: 'swal2-noanimation',
                backdrop: 'swal2-noanimation'
              },
            });
          }
          else { // condition if data login is invalid
            Swal.fire({
              icon: 'error',
              html: 'Wrong email/password!',
              confirmButtonText: 'Close',
              confirmButtonColor: '#3085d6',
              showClass: {
                popup: 'swal2-noanimation',
                backdrop: 'swal2-noanimation'
              },
            });
          }
        }
    }

    // show / hide password toggle function
    showpassword(action) {
        if(action === 'show') {
            $('#password').attr('type', 'password');
            this.showpass = false;
            console.log(action);
        }
        else {
            $('#password').attr('type', 'text');
            this.showpass = true;
            console.log(action);
        }
    }
}
