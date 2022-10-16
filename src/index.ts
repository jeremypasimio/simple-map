import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const mapDiv = document.getElementById('map');
const mapNotNull = mapDiv!;

const user = new User();
const company = new Company();
const map = new CustomMap(mapNotNull);
map.addMarker(user);
map.addMarker(company);
