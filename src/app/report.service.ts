import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { SettingshttpService } from './settings/settingshttp.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  dataRow: any;
  crashPortalAPI: string;
  pageNO:string= "?pageNo=1";

  constructor(
    public http: HttpClient,
    public dataService: DataService,
    public settingshttpService: SettingshttpService
  ) {
    this.crashPortalAPI = environment.crashPortalAPI;
  }

  getCrashReport(): Observable<any> {
    return this.dataService.callRestful('GET', this.crashPortalAPI ,
      {
        params: {
          uUIDName: this.dataRow.uUIDName,
          macId: this.dataRow.macId,
          dateOfPost: this.dataRow.dateOfPost,
          imageName: this.dataRow.imageName,
          versionId: this.dataRow.versionId,
          
        },
        headerData:

        {
          'Content-Type': 'text'
        }
      }
    )
  }
}
