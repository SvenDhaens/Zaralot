import {Injectable} from '@angular/core';
import {RouteInfo} from '../entities/route-info';


const switchRoutes: Array<RouteInfo> = [
  {
    port: 1,
    cableRef: '1-Rood',
    destination: 'tv-hoek rechts (duo ?)'
  },
  {
    port: 2,
    cableRef: '002',
    destination: 'Nico connect'
  },
  {
    port: 3,
    cableRef: '2-Rood',
    destination: 'tv-hoek rechts (duo ?)'
  },
  {
    port: 4,
    cableRef: '1-Zwart',
    destination: 'tv-hoek (utp-coax)'
  },
  {
    port: 5,
    cableRef: '3-Rood',
    destination: 'midden living rechts (duo-rechts)'
  },
  {
    port: 6,
    cableRef: '2-Zwart',
    destination: 'keuken (utp-coax)'
  },
  {
    port: 7,
    cableRef: '1-Blauw',
    destination: 'tv-hoek links (duo ?)'
  },
  {
    port: 8,
    cableRef: '3-Zwart',
    destination: 'slaapkamer achter (utp-coax)'
  },
  {
    port: 9,
    cableRef: '2-Blauw',
    destination: 'tv-hoek links (duo ?)'
  },
  {
    port: 10,
    cableRef: '4-Zwart',
    destination: 'speelkamer (utp-coax)'
  },
  {
    port: 11,
    cableRef: '3-Blauw',
    destination: 'midden living links (duo-rechts)'
  },
  {
    port: 12,
    cableRef: '6-Zwart',
    destination: 'slaapkamer voor schouw (utp-coax)'
  },
  {
    port: 13,
    cableRef: '4-Blauw',
    destination: 'midden living links (duo-links)'
  },
  {
    port: 14,
    cableRef: '7-Zwart',
    destination: 'bureau (utp-coax)'
  },
  {
    port: 15,
    cableRef: '5-Blauw',
    destination: 'slaapkamer achter links (duo)'
  },
  {
    port: 16,
    cableRef: '5-Rood',
    destination: 'slaapkamer achter rechts(duo)'
  },
  {
    port: 17,
    cableRef: '6-Blauw',
    destination: 'speelkamer links (duo)'
  },
  {
    port: 18,
    cableRef: '6-Rood',
    destination: 'speelkamer rechts (duo)'
  },
  {
    port: 19,
    cableRef: '7-Blauw',
    destination: 'bureau links (duo)'
  },
  {
    port: 20,
    cableRef: '7-Rood',
    destination: 'bureau rechts (duo)'
  },
  {
    port: 21,
    cableRef: '8-Blauw',
    destination: 'slaapkamer voor rechts (duo-raam)'
  },
  {
    port: 22,
    cableRef: '8-Rood',
    destination: 'slaapkamer voor links (duo-raam)'
  },
  {
    port: 23,
    cableRef: '5-Zwart',
    destination: 'slaapkamer voor (utp-coax-raam)'
  },
  {
    port: 24,
    cableRef: '001',
    destination: 'Telenet-router'
  }
];
const telenetRoutes: Array<RouteInfo> = [
  {
    port: 1,
    cableRef: '001',
    destination: 'telenet-router - switch'
  },
  {
    port: 3,
    cableRef: '9-Rood',
    destination: 'telenet-router - slaapkamer voor rechts (duo-schouw)'
  },
  {
    port: 4,
    cableRef: '9-Blauw',
    destination: 'telenet-router - slaapkamer voor links (duo-schouw)'
  },
  ];
const telephoneRoutes: Array<RouteInfo> = [
  {
    port: 1,
    cableRef: '4-Rood',
    destination: 'telenet-router - midden living links telefoon (duo-links)'
  },
];

@Injectable()
export class SwitchRoutesService {

  constructor() {
  }

  getSwitchRoutes() {
    return switchRoutes;
  }
  getTelenetRoutes() {
    return telenetRoutes;
  }
  getTelephoneRoutes() {
    return telephoneRoutes;
  }
}
