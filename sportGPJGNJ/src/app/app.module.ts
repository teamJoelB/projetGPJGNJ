import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { MaterialModule } from './material';
<<<<<<< HEAD
import { InscriptionComponent } from './inscription/inscription.component'
import { HttpModule } from '@angular/http';

=======
import { HttpModule } from '@angular/http';
>>>>>>> bf14e3a93055dd0ad9b1a2e4104375797b8e2760

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    CreationEventComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpModule,
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
      },
      {
        path: "inscription",
        component: InscriptionComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
