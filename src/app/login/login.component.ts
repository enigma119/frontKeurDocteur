import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isPatient: boolean = false;
  doctors: any = [];
  patients: any = [];
  username = '';
  email: string;
  password: string;


  constructor(
    public router: Router,
    public commonService: CommonServiceService,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {
    this.doctors = [];
    this.patients = [];
  }

  ngOnInit(): void {
    // this.getpatients();
    // this.getDoctors();
  }

  checkType(event) {
    this.isPatient = event.target.checked ? true : false;
  }

  singIn() {
    const data = {
      email: this.email,
      password: this.password
    }

    console.log(data)
    this.authService.singIn(data).subscribe(res => {
      let result: any = res
      localStorage.setItem('accessToken', result.accessToken)
      console.log(res)
    }, err => {
      console.log(err)
    })
    
  }

  test() {
    this.authService.test({test:'test'}).subscribe(res => {
      console.log('response ',res)
    }, err => {
      console.log(err)
    })
  }



  // login(name, password) {
  //   localStorage.setItem('auth', 'true');
  //   localStorage.setItem('patient', this.isPatient.toString());
  //   if (this.isPatient) {
  //     let filter = this.patients.filter(
  //       (a) => a.name == this.username && a.password === this.password
  //     );
  //     if (filter.length != 0) {
  //       localStorage.setItem('id', filter[0]['id']);
  //       this.toastr.success('', 'Login success!');
  //       this.commonService.nextmessage('patientLogin');
  //       this.router.navigate(['/patients/dashboard']);
  //     } else {
  //       this.toastr.error('', 'Login failed!');
  //     }
  //   } else {
  //     let filter = this.doctors.filter(
  //       (a) => a.doctor_name === this.username && a.password === this.password
  //     );
  //     if (filter.length != 0) {
  //       this.toastr.success('', 'Login success!');
  //       this.commonService.nextmessage('doctorLogin');
  //       localStorage.setItem('id', filter[0]['id']);
  //       this.router.navigate(['/doctor/dashboard']);
  //     } else {
  //       this.toastr.error('', 'Login failed!');
  //     }
  //   }
  // }

  // getDoctors() {
  //   this.commonService.getDoctors().subscribe((res) => {
  //     this.doctors = res;
  //   });
  // }

  // getpatients() {
  //   this.commonService.getpatients().subscribe((res) => {
  //     this.patients = res;
  //   });
  // }
}
