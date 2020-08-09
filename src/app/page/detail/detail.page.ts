import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from './../../service/themoviedb.service'; 
import { ComentarioService } from './../../service/comentario.service'; 
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  detailMovies: any =[ ];
  comentarioMovies: any =[ ];
  idMovie:string;
  verComentario:boolean=false;

  constructor(private themoviedbService:ThemoviedbService,
              private router:ActivatedRoute,
              private comentarioService:ComentarioService) { }

  ngOnInit() {
    this.idMovie=this.router.snapshot.paramMap.get('id');
    this.getDetailMovie();
    this.getComentario();
  }

  getComentario(){
    this.comentarioService.getComentarios(this.idMovie).then(data =>{
      
      debugger
    }).catch(error=>{
      debugger
    })
  }

  getDetailMovie(){
    this.themoviedbService.getMoviesDetail(this.idMovie).then(data =>{
      this.detailMovies=data;
    }).catch(error=>{
      debugger
    })
  }


  verComent(){
  this.verComentario=!this.verComentario;
  }

}
