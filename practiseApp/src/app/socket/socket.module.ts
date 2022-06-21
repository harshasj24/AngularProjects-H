import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketComponent } from './socket/socket.component';
import { SocketService } from './socket-services--module=socket/socket.module.ts.service';
import { RouterModule, Routes } from '@angular/router';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const socketConfig: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {},
};
const routes: Routes = [
  {
    path: 'chat',
    component: SocketComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [SocketComponent, LoginComponent],
  providers: [SocketService, AuthGuard],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SocketIoModule.forRoot(socketConfig),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class SocketModule {}
