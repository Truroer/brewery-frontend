import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BeerServiceService {
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getAllBeers(pageNr) {
    const headers = new HttpHeaders({
      pagenr: `${pageNr}`
    });
    return this.http.get(this.url, { headers });
  }
  getBeerDetails(beerID) {
    const headers = new HttpHeaders({
      beerid: `${beerID}`
    });
    return this.http.get(this.url + "/detailsbyid", { headers });
  }
}
