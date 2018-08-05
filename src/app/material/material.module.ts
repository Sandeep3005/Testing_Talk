import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
