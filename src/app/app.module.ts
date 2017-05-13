import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CandiesComponent } from './home/candies/candies.component';
import { CandiesService } from './home/candies/candies.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CandiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
