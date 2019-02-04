import Coordinates from './Coordinates';
import { fromCoordinates } from './solstice';

export default class App {
  constructor() {
    this._coordinates = document.getElementById('coordinates');
    this._northAzimuth = document.getElementById('north-azimuth');
    this._k = document.getElementById('k');

    this._coordinates.addEventListener('keydown', (e) =>
      this._onCoordinatesKeydown(e)
    );
  }

  _onCoordinatesKeydown(e) {
    if (e.keyCode === 13) {
      const coordinates = Coordinates.parse(this._coordinates.value);
      const values = fromCoordinates(coordinates);
      this._coordinates.value = values.coordinates.toString();
      this._northAzimuth.value = values.azimuth.toString();
      this._k.value = values.k.toString();
    }
  }
}
