import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./default/default.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "auth/login",
  },
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./views/home/home.module").then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./views/auth/auth.module").then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontRoutingModule {}
