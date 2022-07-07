import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbordComponent } from './chatbord/chatbord.component';
import { AuthgaurdGuard } from './core/guards/authgaurd.guard';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent, canActivate: [AuthgaurdGuard] },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
