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

  results:any = [];

  constructor(private wiki: WikiService){}


  onSubmit(){
    console.log('this.searchTerm: ', this.searchTerm);

    this.wiki.search(this.searchTerm).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
