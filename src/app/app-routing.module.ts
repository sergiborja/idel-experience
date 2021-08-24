import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeTwoComponent } from "./components/home-two/home-two.component";
import { BlogDetailsComponent } from "./components/blog-details/blog-details.component";

const routes: Routes = [
    { path: "", component: HomeTwoComponent },
    { path: "blog-details/:expKey", component: BlogDetailsComponent },
    // Here add new pages component

    { path: "**", component: HomeTwoComponent }, // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
