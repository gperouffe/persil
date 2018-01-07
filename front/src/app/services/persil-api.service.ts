import { Injectable } from '@angular/core';
import { GenericApiService } from './generic-api.service';
import { Persil } from '../../common/model';
import { Http } from '@angular/http/';

@Injectable()
export class PersilApiService extends GenericApiService<Persil> {

  constructor(http: Http) { 
    super(http);
    this.resourceName = "persil";
  }

}
