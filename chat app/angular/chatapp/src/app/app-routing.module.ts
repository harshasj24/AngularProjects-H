import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbordComponent } from './chatbord/chatbord.component';
import { AuthgaurdGuard } from './guards/authgaurd.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent, canActivate: [AuthgaurdGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
