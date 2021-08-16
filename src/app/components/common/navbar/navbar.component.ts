import { Component, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
    constructor(
        private viewportScroller: ViewportScroller,
        private router: Router
    ) {}

    public index = [
        { text: "Inicio", anchor: "home" },
        { text: "Descúbrenos", anchor: "about" },
        { text: "Experiencias", anchor: "blog" },
        { text: "Contacto", anchor: "contact" },
    ];

    public onClick(elementId: string): void {
        if (!this.router.url.includes("blog-details")) {
            this.viewportScroller.scrollToAnchor(elementId);
        } else {
            this.router.navigate(["/"]);

            setTimeout(() => {
                this.viewportScroller.scrollToAnchor(elementId);
            }, 500);
        }
    }

    ngOnInit() {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
}
