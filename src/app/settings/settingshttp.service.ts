import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SettingshttpService {
  dataRow: any;
  crashReport: string;
  crashPortalAPI: string;
  constructor(private http: HttpClient, public dataService: DataService) {
    this.crashPortalAPI = environment.crashPortalAPI;
    this.crashReport = environment.crashPortalAPI + 'crashReport'
  }
  getCrashData(): Observable<any> {

    return this.dataService.callRestful('GET', this.crashPortalAPI);

  }
  getCrashReport(): Observable<any> {
    return this.http.get(this.crashReport, {
      params: {
        uUIDName: this.dataRow.uUIDName,
        macId: this.dataRow.macId,
        dateOfPost: this.dataRow.dateOfPost,
        imageName: this.dataRow.imageName,
        versionId: this.dataRow.versionId
      },
      responseType: 'text',
      observe: 'response'
    })
  }

}
