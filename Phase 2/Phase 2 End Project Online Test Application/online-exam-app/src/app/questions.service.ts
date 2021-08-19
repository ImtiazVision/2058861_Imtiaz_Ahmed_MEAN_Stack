import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from './ questions.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(public http: HttpClient) { }
}
