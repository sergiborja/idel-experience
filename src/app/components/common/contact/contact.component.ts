import { Component, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";
import { ContactUsService } from "../../services/contact-us.service";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
    constructor(
        private viewportScroller: ViewportScroller,
        private contact: ContactUsService
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {}

    async submit(form) {
        const body = {
            name: form.name,
            email: form.email,
            number: form.number,
            message: form.message || "No ha mandado mensaje",
        };

        this.contact
            .sendMail(body)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }
}
