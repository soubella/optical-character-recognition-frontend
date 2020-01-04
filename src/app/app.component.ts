import { Component } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'optical-character-recognition-frontend';
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    // Making the HTTP Request
    this.http
      .get('')
      .subscribe(data => {
        console.log(data['test']);

      })
  }
}
