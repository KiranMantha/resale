import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderModule } from 'app/Components/Header';
import { TodoModule } from 'app/Components/Todo';
import { DialogModule } from 'app/Components/Dialog';
import { routing } from '../../Routes/routes'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    TodoModule,
    DialogModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


