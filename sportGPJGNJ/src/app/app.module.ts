import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { MaterialModule } from './material';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    CreationEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'create',
        component: CreationEventComponent
      },
      {
        path: "connexion",
        component: ConnectionComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
