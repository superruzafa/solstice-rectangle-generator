import { readonly } from './util';

export default class Coordinates {
  constructor(lat, long) {
    readonly(this, 'lat', lat);
    readonly(this, 'long', long);
  }

  static parse(string) {
    const regex = /^\s*([+-]?\d+(?:\.\d+)?)º?(?:\s*[,\s]\s*([+-]?\d+(?:\.\d+)?)º?)?\s*$/;
    const matches = string.match(regex);
    if (!matches) {
      return null;
    }
    const lat = parseFloat(matches[1]);
    const long = matches[2] === undefined ? 0.0 : parseFloat(matches[2]);
    return new Coordinates(lat, long);
  }

  toString() {
    const { lat, long } = this;
    return `${lat}º, ${long}º`;
  }
}
