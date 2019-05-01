import { Component, OnInit } from "@angular/core";
import { BeerServiceService } from "../beer-service.service";

@Component({
  selector: "app-beers-list",
  templateUrl: "./beers-list.component.html",
  styleUrls: ["./beers-list.component.css"]
})
export class BeersListComponent implements OnInit {
  beers;
  currentPage;
  constructor(private service: BeerServiceService) {}

  getBeers(pageNr = 1) {
    this.service.getAllBeers(pageNr).subscribe(response => {
      this.beers = response;
      this.currentPage = this.beers.currentPage;
    });
  }

  ngOnInit() {
    this.getBeers();
  }
}
