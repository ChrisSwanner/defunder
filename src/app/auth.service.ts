import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  public admin: Boolean;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.admin = true;
        }
        else {
          this.userDetails = null;
          this.admin = false;
        }
      }
    );
  }
  login() {
    
    var provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider)
    provider.setCustomParameters({
      prompt: 'select_account'
    })
    .then((res) => this.router.navigate(['admin']));
    
  }

  logout() {
    this.afAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}