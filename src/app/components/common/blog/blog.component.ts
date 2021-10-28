import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";

@Component({
    selector: "app-blog",
    templateUrl: "./blog.component.html",
    styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
    constructor(
        private viewportScroller: ViewportScroller,
        private router: Router
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {}

    blogSlides: OwlOptions = {
        loop: true,
        touchDrag: true,
        mouseDrag: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    };

    public nav(route: string) {
        this.router.navigate([route]);
    }
}
