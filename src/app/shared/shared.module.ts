import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';

import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // AngularDateTimePickerModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FilterPipe,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FilterPipe,
  ]
})
export class SharedModule { }
