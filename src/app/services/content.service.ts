import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    private apiURL: string;

    constructor(private http: HttpClient) {
        this.apiURL = 'assets/data/';
    }

    public getContent() {
        return this.http.get(this.apiURL + 'content.json');
    }
}
