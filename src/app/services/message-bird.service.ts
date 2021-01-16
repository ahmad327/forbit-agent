import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageBirdService {

  constructor(private httpClient: HttpClient) {
  }

  public sendWhatsappGreetingMessage(phone: string) {
    const payload = {
      number: `+972${phone.slice(1)}`
    };

    console.log('posting to message bird', payload);

    return this.httpClient.post('https://flows.messagebird.com/flows/9d487274-d811-48fa-bf07-3141474caa87/invoke',
      payload);
  }
}
