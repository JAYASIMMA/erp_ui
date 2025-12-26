import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared-module';

import { HomeRoutingModule } from './home-routing-module';
import { LandingPage } from './components/landing-page/landing-page';


@NgModule({
  declarations: [
    LandingPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
