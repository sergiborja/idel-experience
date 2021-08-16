import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-blog-details",
    templateUrl: "./blog-details.component.html",
    styleUrls: ["./blog-details.component.scss"],
})
export class BlogDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

    public expKey: string;

    ngOnInit() {
        this.expKey = this.route.snapshot.params["expKey"];
    }

    public changeExp(expKey: string) {
        this.expKey = expKey;
    }
}
