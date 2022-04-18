import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HgbrasilService {
  baseUrl: string = 'https://api.hgbrasil.com';//'https://api.hgbrasil.com/weather';
  apiKey: string = '4dc8c1dc';
  formatJson: string = 'json-cors';
  constructor() { }

  buscaPrevisao(){
    let url = this.baseUrl
    url += '/weather';
    const params = {
      key: this.apiKey,
      format: this.formatJson,
      user_ip: 'remote',
    }
    return axios.get(url, {params}).then(res => {
      return res.data
    }).catch(err => {
      console.log(err);
    });
  }

  getWoeid(city: string) {
    let url = this.baseUrl
    url += '/stats/find_woeid';
    const params = {
      key: '17284dd0',
      format: this.formatJson,
      sdk_version: 'console',
      city_name: city
    }
    return axios.get(url, {params}).then(res => {
      return res.data
    }).catch(err => {
      console.log(err);
    });
  }
  getByWoeid(woeid: number){
    let url = this.baseUrl
    url += '/weather';
    const params = {
      key: this.apiKey,
      format: this.formatJson,
      woeid
    }
    return axios.get(url, {params})
      .then(res => {
        return res.data
      }).catch(err => {
        console.log(err);
      }
    );
  }
}


