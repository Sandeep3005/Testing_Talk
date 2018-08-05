import { MockEmployeeRecordsService } from './../data-base/mock-employee-records.service';
import { MaterialModule } from './../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, MaterialModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [ LoginComponent ],
      providers: [ MockEmployeeRecordsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('should has from with field empID and password', () => {
    expect(component.loginForm.contains('empID')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should has both field required', () => {
    let empIDControl = component.loginForm.get('empID');
    empIDControl.setValue('');
    expect(empIDControl.invalid).toBeTruthy();

    let passwordControl = component.loginForm.get('password');
    passwordControl.setValue('');
    expect(passwordControl.valid).toBeFalsy();
  });


});
