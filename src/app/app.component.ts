import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ad-demo';

  get idClaims(): object {
    return this.oauthService.getIdentityClaims();
  }

  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken();
  }

  constructor(private oauthService: OAuthService) {

    oauthService.configure(authConfig);

    this.login().then(_ => {
      console.debug('logged in');
      console.debug('access_token', this.oauthService.getAccessToken());
      console.debug('id_token', this.oauthService.getIdToken())
    });

  }

  // Let's add this convenience method to the lib in the next version
  login(): Promise<void> {
    return this.oauthService.tryLoginCodeFlow().then(_ => {
      if (!this.isLoggedIn) {
        this.oauthService.initLoginFlow();
      }
    });
  }

  logout(): void {
    this.oauthService.logOut();
  }

}
