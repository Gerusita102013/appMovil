import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../service/themoviedb.service'; 
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video-movie',
  templateUrl: './video-movie.page.html',
  styleUrls: ['./video-movie.page.scss'],
})
export class VideoMoviePage implements OnInit {

  traileMovie:any=[];
  idTrailer:string;
  name:string;

  constructor(private themoviedbService:ThemoviedbService, 
              private router:ActivatedRoute, 
              private router2 :Router,
              private rute:ActivatedRoute) { }
 
  ngOnInit() {
    this.idTrailer=this.router.snapshot.paramMap.get('id'); 
    this.gettrailerMovie();
    this.name= this.rute.snapshot.paramMap.get('nick');
  }

  gettrailerMovie(){
    this.themoviedbService.getMoviesTrailer(this.idTrailer).then(data=>{
      this.traileMovie=data;
    }).catch(error=>{
      debugger
    })
  }

  borrar(){
    localStorage.removeItem('sesionlogin');
    this.router2.navigate(['/login']);
  }
}