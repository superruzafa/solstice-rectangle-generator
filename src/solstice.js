import { sindeg, cosdeg, rad2deg } from './util';

const ECLIPTIC = 23.44
const SIN_ECLIPTIC = sindeg(ECLIPTIC);

export function fromCoordinates(coordinates) {
  const { lat } = coordinates;
  const cosAzimuth = SIN_ECLIPTIC / cosdeg(lat);
  const azimuth = Math.acos(cosAzimuth);
  return {
    coordinates,
    azimuth: rad2deg(azimuth),
    k: Math.tan(azimuth)
  };
}
