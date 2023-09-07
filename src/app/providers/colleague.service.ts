import {inject, Injectable} from '@angular/core';
import {Colleague} from "../models/colleague";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  http = inject(HttpClient);

  colleagueApiUrl = 'https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues';

  colleagues: Colleague[] = []

  list(): Colleague[] {
    return this.colleagues;
  }

  getColleagueList(): Observable<Colleague[]> {
    return this.http.get<Colleague[]>(this.colleagueApiUrl);
  }

  changeScore(pseudo: string, scoreToDeduct: number) {
    let indexOfColleague = -1;
    let currentIndex = 0;
    console.log('start');
    console.log(this.colleagues.length)
    while(indexOfColleague === -1 && currentIndex < this.colleagues.length) {
      const colleague = this.colleagues[currentIndex];
      console.log('index : ', currentIndex);
      console.log('colleague : ', colleague);
      colleague.pseudo === pseudo ? indexOfColleague = currentIndex : currentIndex += 1;
    }
    if (indexOfColleague === -1) {
      return
    }
    this.colleagues[indexOfColleague].score += -(scoreToDeduct);
    console.log(this.colleagues[indexOfColleague]);
  }
}
