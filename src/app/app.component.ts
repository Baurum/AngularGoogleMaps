import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps-ang';

  // Zoom level
  zoom: number = 8;
  
  // Center position for the map
  lat: number = 40.344597;
  lng: number = -3.537197;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  infoView(label: string, index:number, lat: number, lng: number) {
    console.log(this.lat, this.lng)
  }

  markers: marker[] = [
	  {
		  lat: 40.344597,
		  lng: -3.537197,
		  label: 'Ofi',
		  draggable: true
	  },
	  {
		  lat: 40.359635,
		  lng: -3.517465,
		  label: 'L',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'M',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
