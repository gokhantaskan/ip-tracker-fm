// Generated by https://quicktype.io

export interface Data {
  ip: string;
  location: Location;
  as: As;
  isp: string;
}

export interface As {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

export interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}
