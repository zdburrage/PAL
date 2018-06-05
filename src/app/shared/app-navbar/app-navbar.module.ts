import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppNavbarComponent],
  exports: [AppNavbarComponent]
})
export class NavbarModuleModule { }
