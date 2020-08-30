import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from './../../service/themoviedb.service'; 
import { ComentarioService } from './../../service/comentario.service'; 
import {Router, ActivatedRoute} from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {
  nombre:string;
  descripcion:string;
  name:string;

  comentario:any[]=[];
  detailMovies: any = [];
  idMovie: string;
  video: any = [];
  verComentario:boolean= false;
  toastController: any;

  constructor(private themoviedbService:ThemoviedbService,
              private router:ActivatedRoute,
              private comentarioService:ComentarioService,
              private router2 :Router,
              private rute:ActivatedRoute) { }

  ngOnInit() {
    this.idMovie=this.router.snapshot.paramMap.get('id');
    this.getDetailMovie();
    this.getComentario();
    this.name= this.rute.snapshot.paramMap.get('nick');
  }

  getComentario(){
    this.comentarioService.getComentarios(this.idMovie).then(data =>{
    }).catch(error=>{
    })
  }

  enviar(){
    let data={
      'nombre':this.name,
      'descripcion':this.descripcion,
      'idMovie':this.idMovie
    }
    ///this.comentario.push({'nombre':this.nombre,'descripcion':this.descripcion,'idmovie':this.idmovie })
    this.comentarioService.addComentarios(data).then(data =>{
      this.nombre="";
      this.descripcion="";
    }).catch(error=>{
  })
}

  getDetailMovie(){
    this.themoviedbService.getMoviesDetail(this.idMovie).then(data =>{
      this.detailMovies=data;
    }).catch(error=>{
    })
  }

  verComent(){
  this.verComentario=!this.verComentario;
  }

  borrar(){
    localStorage.removeItem('sesionlogin');
    this.router2.navigate(['/login']);
  }
}
