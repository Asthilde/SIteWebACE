import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailJSResponseStatus, send } from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = ""
  sendEmail(nom: string, prenom: string, email: string | undefined, telephone: string | undefined, demande: string, message: string){
    send("service_dwh1xyl", "template_d9jbemj", {
      to_name: "Lucas Jany",
      message: nom +  " " + prenom + ", \ncontact : " + email + " " + telephone + "\nObjet de la demande : " + demande + "\n" + message,
    }, "P53sK488drDuqXFsX").then((response) => {
    console.log('Email sent successfully', response);
  }, (error) => {
    console.error('Email sending failed', error);
  });
  }
}
