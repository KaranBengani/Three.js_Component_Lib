import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubeComponent } from './basicShapes/cube/cube.component';
import { LinesComponent } from './basicShapes/lines/lines.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    LinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
