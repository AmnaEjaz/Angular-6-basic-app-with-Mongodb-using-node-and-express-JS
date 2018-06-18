import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) { }

  addAdUnit(name, price, description, image, currency, link) {
    const obj = {
      name: name,
      price: price,
      description: description,
      image: image,
      link:link,
      currency: currency

    };
    console.log("service-->",obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
}

editAdUnit(id) {
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
}

viewDescription(id) {
  return this
            .http
            .get(`${this.uri}/view/${id}`);
}

updateAdUnit(name, price, description, image, currency, link,id) {

  const obj = {
    name: name,
    price: price,
    description: description,
    image: image,
    link:link,
    currency: currency
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

  deleteAdUnit(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
