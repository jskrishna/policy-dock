import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./front/front.module").then((mod) => mod.FrontModule),
    data: {
      title: "front",
    },
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((mod) => mod.AdminModule),
    data: {
      title: "admin",
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
