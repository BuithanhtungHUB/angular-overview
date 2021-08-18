import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { UserListComponent } from './components/users/user-list/user-list.component';
import { NavBarComponent } from './components/core/nav-bar/nav-bar.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavBarComponent,
    SearchFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
