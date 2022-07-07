import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthSerives } from './services/auth.service';
import { ApiService } from './services/api.service';
import { SocketService } from './services/socket.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [],
  providers: [
    AuthSerives,
    ApiService,
    SocketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {}
