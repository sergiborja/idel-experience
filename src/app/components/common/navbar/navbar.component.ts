import { Component, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
    constructor(private viewportScroller: ViewportScroller) {}

    public index = [
        { text: "Inicio", anchor: "home" },
        { text: "Descúbrenos", anchor: "about" },
        { text: "Experiencias", anchor: "blog" },
        { text: "Contacto", anchor: "contact" },
    ];

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
}
