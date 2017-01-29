import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '7bb50ba1714b7488bc25';
  private client_secret= '7bdfa8270e5d1646b16ae65ac39f514d24e9cdc5';

  constructor(private _http: Http) {
    console.log('Github Service Ready....');
    this.username = 'ekrako';
  }
  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username
    + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username
    + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
  updateUser(username: string) {
    this.username = username;
  }
}
