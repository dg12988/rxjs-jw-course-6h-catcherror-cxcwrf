import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const failingHttpRequest$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout'));
  }, 3000);
});

console.log('App Started');

failingHttpRequest$
  .pipe(catchError(error => of('Fallback value')))
  .subscribe(value => console.log(value));
