import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: []
    };
  }
}
