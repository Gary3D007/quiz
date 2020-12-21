import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {IQuizElement} from '../../types';
import {Observable} from 'rxjs';

@Injectable()
export class QuizElementsService {
  constructor(private http: HttpClient) {
  }

  public getQuizElements = (setNumber: string | number): Observable<HttpResponse<IQuizElement[]>> =>
    this.http.get<IQuizElement[]>(`http://localhost:3000/elements?setNumber=${setNumber}`, {
      observe: 'response'
    })
}
