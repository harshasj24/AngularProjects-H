import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { VictroypopupComponent } from './components/victroypopup/victroypopup.component';
import { VscomputerComponent } from './components/vscomputer/vscomputer.component';

const routes: Routes = [
  { path: '', redirectTo: 'mainMenu', pathMatch: 'full' },
  { path: 'mainMenu', component: MainmenuComponent },
  { path: 'vsComputer', component: VscomputerComponent },
  { path: 'dailog', component: VictroypopupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
