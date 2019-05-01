import { Component, OnInit } from "@angular/core";
import { BeerServiceService } from "../beer-service.service";

@Component({
  selector: "app-beers-list",
  templateUrl: "./beers-list.component.html",
  styleUrls: ["./beers-list.component.css"]
})
export class BeersListComponent implements OnInit {
  beers;
  constructor(private service: BeerServiceService) {}

  ngOnInit() {
    this.service.getAllBeers().subscribe(result => {
      this.beers = result;
      console.log(result);
    });
  }
}
