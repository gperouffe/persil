import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { ResolvedReflectiveFactory } from '@angular/core/src/di/reflective_provider';

@Injectable()
export abstract class GenericApiService<T> {

  protected apiUrl: string;
  protected resourceName: string;

  constructor(
    protected http: Http
  ) { 
    if (environment.production) {
      this.apiUrl = "http://node.persil.ovh1.ec-m.fr/";
    }
    else {
      this.apiUrl = "http://localhost:3000/"
    }
  }

  get(): Observable<T[]> {
    return this.http.get(this.apiUrl + this.resourceName)
      .map((res: Response) => this.manageSuccess(res))
      .catch((error: any) => this.manageError(error));
  }


  protected manageSuccess(res: Response) {
    if (res.text().length > 0)
      return res.json();
    else
      return {};
  }

  protected manageError(error: Response) {
    return Observable.throw((error.json ? error.json().error : error) || 'Server error');
  }
}
