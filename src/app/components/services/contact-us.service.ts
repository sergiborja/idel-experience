import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ContactUsService {
    constructor(private http: HttpClient) {}

    public sendMail(data: any): Promise<any> {
        return this.http
            .post(`${environment.apiUrl}/contact`, data)
            .toPromise();
    }
}
