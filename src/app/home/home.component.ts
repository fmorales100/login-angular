import { Component } from '@angular/core';
import { MouseEvent, AgmMap } from '@agm/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
  // google maps zoom level
  zoom: number = 16;
  
  // initial center position for the map
  lat: number = 4.8084898;
  lng: number = -75.6851401;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      titulo:'',
      content:''
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 4.807979, 
		  lng: -75.681013,
		  label: '',
		  draggable: true,
      titulo: 'PARQUE LA REBECA',
      content:'https://i.postimg.cc/7YNjRZGc/Opera-Instant-nea-2019-03-20-211051-edup-gov-co.png'
	  },
	  {
		  lat: 4.8088283,
		  lng: -75.682749,
		  label: '',
		  draggable: false,
      titulo: 'PARQUE POPULAR MODELO',
      content:'https://scontent.cdninstagram.com/vp/49a15f7f6e0ccf0f03f874be4ca9d037/5D683C71/t51.2885-15/e35/s480x480/57358355_362816120993106_4794940731653548862_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com'
	  },
	  {
		  lat: 4.808064,
		  lng:  -75.686953,
		  label: '',
		  draggable: true,
      titulo: 'PARQUE LA JULIA',
      content:'https://i0.wp.com/www.ecos1360.com/wp-content/uploads/2018/05/Los-prepliegos-para-la-construcci%C3%B3n-de-nuevos-parques-en-la-Avenida-Circunvalar-ya-est%C3%A1n-en-el-Secop.jpg?fit=600%2C337'
	  },
	  {
		  lat: 4.808375, 
		  lng: -75.689746,
		  label: '',
		  draggable: true,
      titulo: 'PARQUE PROMETEO',
      content:'https://risaraldahoy.com/wp-content/uploads/2018/06/unnamed-3.jpg'
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
  titulo?: string;
  content?: string;
}
