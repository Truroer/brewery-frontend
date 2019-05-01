import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BeerServiceService {
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getAllBeers() {
    return this.http.get(this.url);
  }
}
