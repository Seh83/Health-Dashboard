import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    public getHealthData(): Observable<any> {
        let test = [];
        return this.http.get(`https://dashboard.healthit.gov/api/open-api.php?source=AHA_2008-2015.csv`)
            .pipe(
                map(response => {
                    return response
                })
            );
    }
}
