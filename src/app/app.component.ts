import { Component } from '@angular/core';
import { WikiService } from './wiki.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wikiApi';
  searchTerm:any;
  totalResults:any;
  page: number = 1;
  results:any = [];

  constructor(private wiki: WikiService){}

  onSubmit(){
    this.wiki.search(this.searchTerm).subscribe((res:any)=>{
      this.results = res.query.search
      this.totalResults = res.query.search.length
      console.log(res)
    })
    // if empty search, clear previous search content
    if(!this.searchTerm.length){
      this.results.length = 0; 
   }
  }
}
