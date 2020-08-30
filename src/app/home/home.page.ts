import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThemoviedbService } from '../service/themoviedb.service';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  peli:any=[];
  contadorpelicula :number=1;
  name:string;

 @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private router :Router,
    private Datos: ThemoviedbService,
    private rute:ActivatedRoute ){}

    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
       }
  borrar(){
    localStorage.removeItem('sesionlogin');
    this.router.navigate(['/login']);
  }

  ngOnInit(){
    this.GetPopulares(event);
    this.name= this.rute.snapshot.paramMap.get('nick');
  }
  
  GetPopulares(event){
    this.Datos.Populares(this.contadorpelicula).then(data =>{
      for (let index = 0; index < data['results'].length; index++) {
        this.peli.push(data['results'][index]);   
      }
      if (this.peli.length == 200) {
        event.target.disabled = true;
      }
      event.target.complete();
      this.contadorpelicula++;

    }).catch(error =>{
        console.log(error);
    })
  }
  
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


}