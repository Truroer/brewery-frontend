import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BeerDetailComponent } from "./beer-detail/beer-detail.component";
import { BeersListComponent } from "./beers-list/beers-list.component";

const routes: Routes = [
  { path: "", component: BeersListComponent, pathMatch: "full" },
  { path: ":id", component: BeerDetailComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
