import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShareModule } from '../share/share.module';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { loadSvgResources } from '../tools/svg.util';
import { AppRoutingModule } from '../app-routing.module';
import { ServiceModule } from '../service/service.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ShareModule,
    AppRoutingModule,
    ServiceModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
  ]
})
export class CoreModule {
  // coreModule 只加载一次
  //  @SkipSelf() 避免死循环
  // @Optional() 首次加载
  constructor(
    @SkipSelf() @Optional() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载');
    }
    loadSvgResources(ir, ds);
  }
}
