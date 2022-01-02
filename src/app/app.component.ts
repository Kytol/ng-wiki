import { Component } from '@angular/core';
import { WikiService } from './wiki.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-wiki';
  searchTerm:any;
  totalResults:any;
  page: number = 1;
  results:any = [];

  constructor(private wiki: WikiService){}


  onSubmit(){
    console.log('this.searchTerm: ', this.searchTerm);
    this.wiki.search(this.searchTerm).subscribe((res:any)=>{
      this.results = res.query.search
      this.totalResults = res.query.search.length
      console.log(res)
    })
  }

}
