import { Component } from '@angular/core';
import { Persil } from '../common/model';
import { PersilApiService } from './services/persil-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public persils: Persil[];
  public preferredPersil: string;

  constructor(private persilApiService: PersilApiService) {
    this.persilApiService.get().subscribe(
      res => {
        this.persils = res;
        this.preferredPersil = this.persils[0].NomScientifique;
      },
      err => console.error(err)
    )
  }

  public sendPreferredPersil() {
    console.log(this.preferredPersil)
  }

}
