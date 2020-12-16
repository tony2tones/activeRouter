import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: 'page-three', component: PageThreeComponent },
  { path: '**', component: HomeComponent }

]; // sets up routes constant where you define your routes


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
