export function readonly(object, prop, value) {
  Object.defineProperty(object, prop, {
    enumerable: true,
    configurable: false,
    writeable: false,
    value
  });
}

export const Pi2 = Math.PI * 2;

export function modulo(value, mod) {
  return ((value % mod) + mod) % mod;
}

export function deg2rad(deg) {
  return modulo(deg * Pi2 / 360, Pi2);
}

export function rad2deg(rad) {
  return modulo(rad * 360 / Pi2, 360);
}

export function sindeg(deg) {
  return Math.sin(deg2rad(deg));
}

export function cosdeg(deg) {
  return Math.cos(deg2rad(deg));
}
