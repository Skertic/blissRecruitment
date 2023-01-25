import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuestionModel } from '../interfaces/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private endpoint = 'questions';

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getList(limit: number, offset: number, filters?: any): Observable<QuestionModel[]> {
    let params = `limit=${limit}&offset=${offset}`;
    if (filters) {
      params += `&filter=${filters}`;
    }
    return this.http.get<QuestionModel[]>(`${environment.apiBaseUrl}/${this.endpoint}?${params}`)
  }

  public getQuestion(id: number): Observable<QuestionModel> {
    return this.http.get<QuestionModel>(`${environment.apiBaseUrl}/${this.endpoint}/${id}`);
  }
}
