import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { BeerServiceService } from "../beer-service.service";

@Component({
  selector: "app-beer-detail",
  templateUrl: "./beer-detail.component.html",
  styleUrls: ["./beer-detail.component.css"]
})
export class BeerDetailComponent implements OnInit {
  beerDetails;
  beerId;
  constructor(
    private route: ActivatedRoute,
    private service: BeerServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.beerId = params["id"];
      this.service.getBeerDetails(this.beerId).subscribe(response => {
        this.beerDetails = response;
      });
    });
  }
  getYear(dateStr) {
    const date = new Date(dateStr);
    return date.getFullYear();
  }
}
