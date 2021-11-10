import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";

@Component({
    selector: "app-home-two",
    templateUrl: "./home-two.component.html",
    styleUrls: ["./home-two.component.scss"],
})
export class HomeTwoComponent implements OnInit {
    constructor(private router: Router) {}

    public onClick(elementId: string): void {
        this.router.navigate([`blog-details/${elementId}`]);
    }

    ngOnInit() {}

    homeSlides: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        items: 1,
        autoHeight: true,
        smartSpeed: 750,
        autoplay: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
    };
}
