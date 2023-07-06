import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';

import { ActionsAreaComponent } from './components/actions-area/actions-area.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    PageNotFoundComponent,
    ActionsAreaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
