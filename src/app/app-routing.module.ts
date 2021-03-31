import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navigator', component: ListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
