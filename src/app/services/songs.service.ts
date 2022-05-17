import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError, EMPTY } from 'rxjs';
import { Songs } from '../models/song.interface';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  ROOT_URL = 'https://levi9-song-quiz.herokuapp.com/api/data';

  private _audioData$ = new BehaviorSubject<Songs[]>([]);
  audioData$ = this._audioData$.asObservable();

  private _error$ = new BehaviorSubject<string>('');
  error$ = this._error$.asObservable();

  constructor(private http: HttpClient) {}

  getData(): any {
    return (this.audioData$ = this.http.get<Songs[]>(this.ROOT_URL).pipe(
      tap((data: any) => {
        this.audioData$ = data;
      })
    ));
  }
}
