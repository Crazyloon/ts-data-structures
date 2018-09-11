import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicArrayComponent } from './dynamic-array/dynamic-array.component';
import { LinkedListComponent } from './linked-list/linked-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicArrayComponent,
    LinkedListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
