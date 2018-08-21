import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShareModule } from '../share/share.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    ShareModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
