import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(score: number): string {
    if (score > 0) {
      return `+${score}`;
    }
    return score.toString();
  }

}
