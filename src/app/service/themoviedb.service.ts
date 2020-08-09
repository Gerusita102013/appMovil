import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  
  constructor(private http: HttpClient) { }

  getMovies(nameMovie: string, page: number){
    let url='https://api.themoviedb.org/3/search/movie?api_key=e1d77d32eb99de15417bb52e2c7544d9&language=en-US&query='+nameMovie+'&page='+page+'&include_adult=false';
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }

  getMoviesDetail(idMovie:string){
    let url='https://api.themoviedb.org/3/movie/'+idMovie+'?api_key=e1d77d32eb99de15417bb52e2c7544d9&language=en-US';
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }

  getMoviesTrailer(idTrailer:string){
    let url='https://api.themoviedb.org/3/movie/'+idTrailer+'/videos?api_key=e1d77d32eb99de15417bb52e2c7544d9&language=en-US';
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }

}
