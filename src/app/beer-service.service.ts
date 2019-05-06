import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class BeerServiceService {
  url = environment.apiUrl;

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
