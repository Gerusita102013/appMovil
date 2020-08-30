import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import validator from 'validator';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private login:LoginService,private ruta:Router, private toast:ToastController) { }
  user:any[];
  mail:string;
  pass:string;
  

  ngOnInit() {
  }

  async mensaje(msj:string) {
    const toast = await this.toast.create({
      message: msj,
      duration: 2000
    });
    toast.present();
  }

  logeo(){
    if (this.mail==null || this.pass==null) {
      this.mail=null;
      this.pass=null; 
      this.mensaje('USUARIO Y CONTRASEÑA VACIOS');
    }
    
    this.login.logeo(this.mail,this.pass).then(data =>{
      this.user=data['register'];
      this.mail=null;
      this.pass=null;
        localStorage.setItem('sesionlogin','true')
        this.ruta.navigate(['/home/'+this.user[0].nick])
      
    })
    .catch(error =>{
      console.log(error);
    })
  }
  
    
}