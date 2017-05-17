import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AnotherComponent } from './another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertybindingComponent } from './propertybinding.component';
import { EventbindingComponent } from './eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,

    AnotherComponent,
    DatabindingComponent,
    PropertybindingComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
