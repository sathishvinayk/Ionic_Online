import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {} from '@types/googlemaps';
declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {
    //We need to include whatever method in the constructor like below
    this.ionViewDidLoad();
  }
  //Setting a timeout to 1000 will solve the problem cannot find nativeElement
  // ngAfterViewInit() {
  //   console.log("afterinit");
  //   setTimeout(() => {
  //     this.loadMap();
  //   }, 1000);
  // }
  ionViewDidLoad(){
    setTimeout(()=>{
      this.loadMap();
    },1000);
  }
  loadMap(){
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
