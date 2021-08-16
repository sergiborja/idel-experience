import { Component, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
    constructor(private viewportScroller: ViewportScroller) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {}

    async submit(form) {
        var name = form.name;
        console.log(name);

        var email = form.email;
        console.log(email);

        var number = form.number;
        console.log(number);

        var subject = form.subject;
        console.log(subject);

        var message = form.message;
        console.log(message);

        const body = {
            name: form.name,
            email: form.email,
            number: form.number,
            subject: form.subject,
            message: form.message || "No ha mandado mensaje",
        };

        // const emailTransporter = nodeMailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         user: "theidealexperience@gmail.com",
        //         pass: "ihnbkpphmozougwt",
        //     },
        // });

        // var mailOptions = {
        //     to: "theidealexperience@gmail.com",
        //     subject: "¡Alguien busca una experiencia!",
        //     text: JSON.stringify(body),
        // };

        // const emailResponse = await emailTransporter.sendMail(mailOptions);

        // if (emailResponse.error) {
        //     console.log(emailResponse.error);
        // } else {
        //     console.log("Email sent: " + emailResponse.response);
        // }
    }
}
