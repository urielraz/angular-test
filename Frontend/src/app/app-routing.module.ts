import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ActionsAreaComponent } from './components/actions-area/actions-area.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'actions', component: ActionsAreaComponent },
    {path: '', redirectTo: '/home', pathMatch: "full" },
    {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
