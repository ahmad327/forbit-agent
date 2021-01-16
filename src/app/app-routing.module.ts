import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {WhatsappComponent} from './components/whatsapp/whatsapp.component';
import {MsalGuard} from '@azure/msal-angular';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [MsalGuard],
    children: [
      {
        path: 'whatsapp',
        component: WhatsappComponent
      },
      {
        path: '', redirectTo: 'whatsapp', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
