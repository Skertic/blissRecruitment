import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private endpoint = 'share';

  constructor(
    private readonly http: HttpClient
  ) { }

  public checkApiHealth(): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/${this.endpoint}`, {});
  }
}
