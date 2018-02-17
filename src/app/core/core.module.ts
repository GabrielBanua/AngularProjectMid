import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularFire2/firestore';
import { AngularFireAuthModule } from 'angularFire2/auth';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthService
  ],
  declarations: []
})
export class CoreModule { }
