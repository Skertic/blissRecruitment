import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuestionListModel } from '../interfaces/question-list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private endpoint = 'questions';

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getList(limit: number, offset: number, filters?: any): Observable<QuestionListModel[]> {
    let params = `limit=${limit}&offset=${offset}`;
    if (filters) {
      params += `&filter=${filters}`;
    }
    return this.http.get<QuestionListModel[]>(`${environment.apiBaseUrl}/${this.endpoint}?${params}`)
  }
}
