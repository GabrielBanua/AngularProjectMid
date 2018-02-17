import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from 'angularFire2/auth';

interface User{
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;

}


@Injectable()
export class AuthService {
user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {

                //Get Auth data, then get firestore user document // null
                this.user = this.afAuth.authState
                .switchMap(user => {
                  if(user){
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
                  }else {
                    return Observable.of(null)
                  }
                })
}

////// OAuth Methods /////
googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return this.oAuthLogin(provider);
}

facebookLogin() {
  const provider = new firebase.auth.FacebookAuthProvider();
  return this.oAuthLogin(provider);
}

twitterLogin() {
  const provider = new firebase.auth.TwitterAuthProvider();
  return this.oAuthLogin(provider);
}

private oAuthLogin(provider: firebase.auth.AuthProvider) {
  return this.afAuth.auth.signInWithPopup(provider)
    .then((credential) => {
       this.updateUserData(credential.user);
    })
}

private updateUserData(user: User) {
  const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
  const data: User = {
    uid: user.uid,
    email: user.email || null,
    displayName: user.displayName || 'nameless user',
    photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ',
  };
  return userRef.set(data);
  }
}
