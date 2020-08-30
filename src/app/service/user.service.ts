import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  
  addUser(user:any){
    const parametros =new HttpParams()
    .set('nick', user.usuario)
    .set('lastname', user.apellido)
    .set('email', user.corre)
    .set('pass', user.password)
    let url='https://murmuring-thicket-24160.herokuapp.com/api/user';
    return new Promise((resolve, reject)=>{
      this.http.post(url, parametros).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }
}
