import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing.module';
import { AuthenticationModule } from '../modules/authentication/authentication.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../modules/authentication/interceptors/token.interceptor';
import { MainLayoutComponent } from './pages/main/main.layout.component';
import { HeaderLayoutComponent } from './pages/header/header.layout.component';
import { ContentLayoutComponent } from './pages/content/content.layout.component';
import { SharedModule } from '../shared/shared.module';
import { WebSidebarLayoutComponent } from './pages/web-sidebar/web-sidebar.layout.component';
import { MobileSidebarLayoutComponent } from './pages/mobile-sidebar/mobile-sidebar.layout.component';
import { SidebarLayoutComponent } from './pages/sidebar/sidebar.layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderLayoutComponent,
    ContentLayoutComponent,
    WebSidebarLayoutComponent,
    MobileSidebarLayoutComponent,
    SidebarLayoutComponent
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule,
    AuthenticationModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class LayoutModule {}
