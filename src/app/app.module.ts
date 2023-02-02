import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MockDataService } from './mock-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppLoader } from './loader/loader.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, AppLoader],
  bootstrap: [AppComponent],
  providers: [MockDataService],
})
export class AppModule {}
