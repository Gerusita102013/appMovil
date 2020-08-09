import { Component, OnInit, ViewChild  } from '@angular/core';
import { ThemoviedbService } from '../../service/themoviedb.service'; 
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-buscarmovies',
  templateUrl: './buscarmovies.page.html',
  styleUrls: ['./buscarmovies.page.scss'],
})

export class BuscarmoviesPage implements OnInit {
  peli:string;
  numberPage:number=1;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  constructor(private themoviedbService:ThemoviedbService ) { }
  listMovies:any=[];
  nombreBusqueda:string;
  
  
  ngOnInit() {
  }

  getMovies(event){
    if(this.peli!=this.nombreBusqueda){
      this.listMovies.length=0;
      this.nombreBusqueda=this.peli;
      this.numberPage=1;
    }
    
    this.themoviedbService.getMovies(this.peli, this.numberPage).then(correcto=>{
      console.log("movies", correcto["results"]);
      for(let i=0; i<correcto["results"].length; i++){
        this.listMovies.push(correcto["results"][i]);
      }  
      if(this.listMovies.length == 200){
        event.target.disabled = true;
      }
      event.target.complete();
      this.numberPage++;
     }).catch(error =>{
     })
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
