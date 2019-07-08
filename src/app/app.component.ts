import { Component } from '@angular/core';
import en_US from '../assets/en_US.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = en_US.heading;
  subhead = en_US.description;
  snippetQuotes = en_US.snippets;
  locations = en_US.locations;
  video = en_US['video-embed'];
  quoteText = en_US.quote.text;
  quoteAuthor = en_US.quote.author;
  
  
  constructor(){
    console.log(en_US.gallery[0])
  }
}
