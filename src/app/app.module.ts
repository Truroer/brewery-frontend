import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BeersListComponent } from "./beers-list/beers-list.component";
import { BeerItemComponent } from "./beers-list/beer-item/beer-item.component";
import { BeerDetailComponent } from "./beer-detail/beer-detail.component";
import { BeerServiceService } from "./beer-service.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeersListComponent,
    BeerItemComponent,
    BeerDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BeerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
