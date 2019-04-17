import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { MaterialModule } from './material';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    CreationEventComponent,
    EventdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpModule,
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
