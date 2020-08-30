import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LogoutGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate(){
    debugger
    let logout=localStorage.getItem('sesionlogin');
      if(logout){ 
        this.router.navigate(['/home']);
        return true;
    }
    return false;
  }
}
