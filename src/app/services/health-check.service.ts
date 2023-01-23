import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HealthCheckModel } from '../interfaces/health-check.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {
  private endpoint = 'health';

  constructor(
    private readonly http: HttpClient
  ) { }

  public checkApiHealth(): Observable<HealthCheckModel> {
    return this.http.get<HealthCheckModel>(`${environment.apiBaseUrl}/${this.endpoint}`);
  }
}
