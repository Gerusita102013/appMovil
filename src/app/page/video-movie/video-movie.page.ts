import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../service/themoviedb.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-movie',
  templateUrl: './video-movie.page.html',
  styleUrls: ['./video-movie.page.scss'],
})
export class VideoMoviePage implements OnInit {

  traileMovie:any=[];
  idTrailer:string;
  constructor(private themoviedbService:ThemoviedbService, private router:ActivatedRoute) { }
 
  ngOnInit() {
    this.idTrailer=this.router.snapshot.paramMap.get('id'); 
    this.gettrailerMovie();
  }

  gettrailerMovie(){
    this.themoviedbService.getMoviesTrailer(this.idTrailer).then(data=>{
      this.traileMovie=data;
    }).catch(error=>{
      debugger
    })
  }
}