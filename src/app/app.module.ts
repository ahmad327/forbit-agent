import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {environment} from 'src/environments/environment';
import {Configuration} from 'msal';
import {MSAL_CONFIG, MSAL_CONFIG_ANGULAR, MsalAngularConfiguration, MsalModule, MsalService} from '@azure/msal-angular';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {WhatsappComponent} from './components/whatsapp/whatsapp.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

export function MSALConfigFactory(): Configuration {
  return {
    auth: {
      clientId: environment.clientId,
      authority: environment.authority,
      validateAuthority: true,
      redirectUri: environment.redirectUrl,
      postLogoutRedirectUri: environment.redirectUrl,
      navigateToLoginRequestUrl: true
    },
    cache: {
      storeAuthStateInCookie: true,
    }
  };
}

export function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return {
    popUp: false
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: MSAL_CONFIG,
      useFactory: MSALConfigFactory
    },
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
