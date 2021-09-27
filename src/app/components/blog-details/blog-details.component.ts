import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-blog-details",
    templateUrl: "./blog-details.component.html",
    styleUrls: ["./blog-details.component.scss"],
})
export class BlogDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router) {}

    public expKey: string;

    public experiences = ["trees", "london", "toros"];

    ngOnInit() {
        this.expKey = this.route.snapshot.params["expKey"];
    }

    public changeExp() {
        let routeToNavigate: string;

        const idx = this.experiences.findIndex((exp) => this.expKey == exp);

        if (idx == this.experiences.length - 1) {
            routeToNavigate = this.experiences[0];
        } else {
            routeToNavigate = this.experiences[idx + 1];
        }

        this.router.navigate([`blog-details/${routeToNavigate}`]);

        this.expKey = routeToNavigate;
    }
}
