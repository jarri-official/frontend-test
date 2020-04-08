import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {Item} from '../model/item';
import {Injectable} from '@angular/core';
import {ItemsTreeGenerator} from '../items-tree.generator';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ItemDetailsResolver implements Resolve<Item> {

  constructor(private itemsService: ItemsTreeGenerator,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Item> {
    /*return this.itemsService.getItemDetails(route.params.id)
      .pipe(catchError((error: HttpErrorResponse) => {
        this.router.navigate(['not-found']);
        return throwError(error);
      }));*/
    return of(null);
  }
}
