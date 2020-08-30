import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ComentarioService {

  constructor(private http: HttpClient) { }

  httOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }

  getComentarios(idmovie:string){
    let url='https://murmuring-thicket-24160.herokuapp.com/api/comentario/'+ idmovie;
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }


  addComentarios(data:any){
    let url='https://murmuring-thicket-24160.herokuapp.com/api/comentario';
    return new Promise((resolve, reject)=>{
      this.http.post(url,data).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }
}
