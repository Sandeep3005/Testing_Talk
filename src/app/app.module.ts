import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { OverlayComponent } from './shared/overlay/overlay.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingmodule } from './app-routing.module';
import { MockEmployeeRecordsService } from './data-base/mock-employee-records.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListService } from './data-base/todo-list.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverlayComponent,
    LoginComponent,
    DashboardComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingmodule,
    FormsModule
  ],
  providers: [
    MockEmployeeRecordsService,
    TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
