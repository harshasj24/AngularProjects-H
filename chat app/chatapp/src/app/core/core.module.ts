import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketsService } from './services/sockets.service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const socketIoConfig: SocketIoConfig = {
  url: 'http://localhost:4500',
  options: {},
};
@NgModule({
  declarations: [],
  providers: [SocketsService],

  imports: [CommonModule, SocketIoModule.forRoot(socketIoConfig)],
})
export class CoreModule {}
