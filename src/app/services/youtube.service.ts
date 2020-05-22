import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyDSHkt4GnI70TpAll_Kwy7AdkMYBta4a-E';
  private playlist = 'UUPahLBC8Sp6KdxkMoHWVk8Q';
  private nextPageToken = ''; // 'CAoQAA';
  constructor( private http: HttpClient) { }

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;
    const params = new HttpParams()
          .set('part', 'snippet')
          .set('key', this.apikey )
          .set( 'playlistId', this.playlist )
          .set( 'maxResults', '10' )
          .set( 'pageToken', this.nextPageToken )
          ;
    return this.http.get<YoutubeResponse>( url, { params } )
    .pipe(
      map( resp => {
        // console.log(resp);
        this.nextPageToken = resp.nextPageToken;
        return resp.items;
      }),
      map( items =>  items.map( video => video.snippet ) )
    );
  }
}
