import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishesComponent } from './wishes/wishes.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'wish',
    component: WishesComponent
  },
  {
    path:'',
    component:AppComponent
  }
  // {
  //   path: 'wish',
  //   redirectTo: '/wish',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'reconnect',
  //   component: ReconnectComponent
  // // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
