import {inject, Injectable} from '@angular/core';
import {Colleague} from "../models/colleague";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ColleagueDetails} from "../models/colleague-details";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  http = inject(HttpClient);

  colleagueApiUrl = 'https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/colleagues';

  colleagues: Colleague[] = []

  list(): Colleague[] {
    return this.colleagues;
  }

  getColleagueList(): Observable<Colleague[]> {
    return this.http.get<Colleague[]>(this.colleagueApiUrl);
  }

  getColleagueDetails(pseudo: string): Observable<ColleagueDetails> {
    return this.http.get<ColleagueDetails>(this.colleagueApiUrl + '/' + pseudo);
  }

  addColleague(colleague: ColleagueDetails) {
    return this.http.post(
      this.colleagueApiUrl,
      {
        "pseudo": colleague.pseudo,
        "last": colleague.last,
        "first": colleague.first,
        "photo": colleague.photo
      }
    );
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
