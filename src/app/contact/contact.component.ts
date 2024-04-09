import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../email.service';
import { Formulaire } from '../formulaire';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  formulaire: Formulaire = { prenom:'', nom:'', email:'', telephone:'', demande:'', message:''};

  form!: FormGroup;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
      this.form = new FormGroup({
        prenom: new FormControl(this.formulaire.prenom, [Validators.required]),
        nom: new FormControl(this.formulaire.nom, [Validators.required]),
        email: new FormControl(this.formulaire.email, [Validators.required, Validators.email]),
        telephone: new FormControl(this.formulaire.telephone, [Validators.minLength(9), Validators.maxLength(14)]),
        demande: new FormControl(this.formulaire.demande, [Validators.required]),
        message: new FormControl(this.formulaire.message, [Validators.required]),
      });
  }

  get prenom() {
    return this.form.get('prenom');
  }

  get nom() {
    return this.form.get('nom');
  }

  get email() {
    return this.form.get('email');
  }

  get telephone() {
    return this.form.get('telephone');
  }

  get demande() {
    return this.form.get('demande');
  }

  get message() {
    return this.form.get('message');
  }

  onSubmit(): void {
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    const formData = this.form.value;
    console.log("L'email a bien été envoyé");
    //console.log(this.form.get('prenom'));
    console.log(formData['prenom']);
    this.emailService.sendEmail(formData['nom'], formData['prenom'], formData['email'], formData['telephone'], formData['demande'], formData['message']);
    this.onReset();
  }

  onReset(): void {
    this.form.reset();
  }
}
