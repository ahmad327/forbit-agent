import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageBirdService} from '../../services/message-bird.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {

  form: FormGroup;
  loading: boolean;
  success: boolean;

  constructor(private fb: FormBuilder,
              private messageBirdService: MessageBirdService) {
  }

  ngOnInit() {
    this.form = this.fb.group({phone: ['', [Validators.required, Validators.pattern(/[0-9]{10}/)]]});
  }

  onSubmit() {
    console.log(this.form.value, this.form.status);
    if (this.form.valid) {
      this.loading = true;
      this.messageBirdService.sendWhatsappGreetingMessage(this.form.value.phone).pipe(
        tap(() => this.loading = false),
        tap(() => this.success = true),
      ).subscribe();
    }
  }

}
