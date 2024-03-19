import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountMenuComponent } from './account-menu.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'; 
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [AccountMenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule
  ],
  exports: [AccountMenuComponent]
})
export class AccountMenuModule { }
