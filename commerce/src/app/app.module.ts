import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { RestmodelModule } from './restmodel/restmodel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    HttpClientJsonpModule,
    SharedModule,
    RestmodelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
