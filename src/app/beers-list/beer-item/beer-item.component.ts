import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-beer-item",
  templateUrl: "./beer-item.component.html",
  styleUrls: ["./beer-item.component.css"]
})
export class BeerItemComponent implements OnInit {
  @Input() beer;

  constructor() {}

  ngOnInit() {}
}
