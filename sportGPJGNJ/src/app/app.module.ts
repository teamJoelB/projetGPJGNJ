import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    CreationEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'create',
        component: CreationEventComponent
      },
      {
        path : 'consult',
        component : EventdetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
