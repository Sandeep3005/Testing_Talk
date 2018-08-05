import { MockEmployeeRecordsService } from '../data-base/mock-employee-records.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  empRecords: any;
  empIDList: String[] = [];
  constructor(
    private fb: FormBuilder,
    private mockEmployeeRecordsService: MockEmployeeRecordsService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      empID: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
   }


   ngOnInit() {
     this.mockEmployeeRecordsService.getMockEmployeeRecords().subscribe((res: any) => {
       this.empRecords = res;
       this.empRecords.forEach((emp) => {
          this.empIDList.push(emp.empID);
       });
     });

   }

   submitForm() {
     let { empID, password } = this.loginForm.value;
     let emp = this.empRecords.find((emp: any) => emp.empID == empID);
     if (Md5.hashStr(password) === emp.password) {
       this.mockEmployeeRecordsService.setCurrentEmp(emp);
       this.router.navigate(['dashboard']);
     }
   }

   resetForm() {
     this.loginForm.reset();
   }

}
