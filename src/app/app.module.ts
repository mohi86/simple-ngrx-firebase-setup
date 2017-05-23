import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksDetailComponent } from './tasks-detail/tasks-detail.component';
import { DataService } from "app/data.service";
import { StoreModule } from "@ngrx/store";

import { reducer } from './reducers/tasks';
import { EffectsModule } from "@ngrx/effects";
import {TasksEffects} from './effects/tasks';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TasksDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(TasksEffects),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
