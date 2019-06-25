import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;


@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  public getAllEvents(trackedEntityInstance: string): Observable<any[]> {
    const params = new HttpParams()
      .set('paging', 'false')
      .set('trackedEntityInstance', trackedEntityInstance)
      .set('programStage', 'lwXJZa7aXWK');
    return this.http
      .get(API_URL + '/events', { params })
      .map(response => {
        if (response.hasOwnProperty('events')) {
          return response['events'];
        }
      })
      .catch(this.handleError);
  }

  public getAllEntities(orgUnit): Observable<any[]> {
    const params = new HttpParams()
      .set('paging', 'false')
      .set('ou', orgUnit)
      .set('program', 'JdxT6MNFhyS');

    return this.http
      .get(API_URL + '/trackedEntityInstances', { params })
      .map(response => {
        if (response.hasOwnProperty('trackedEntityInstances')) {
          return response['trackedEntityInstances'];
        }
      })
      .catch(this.handleError);
  }

  public getOrgUnits(): Observable<any[]> {
    const params = new HttpParams()
      .set('level', '5')
      .set('paging', 'false');
    return this.http
      .get(API_URL + '/organisationUnits', { params })
      .map(response => {
        if (response.hasOwnProperty('organisationUnits')) {
          return response['organisationUnits'];
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
