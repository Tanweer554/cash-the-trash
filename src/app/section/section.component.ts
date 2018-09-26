import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  count=0;
     
     sub=[
          {
     	   title:"Html5",
           logo:"assets/logo1.png",
           description:" HTML 5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current major version of the HTML standard."
       		},

       		{
           	title:"css3",
           logo:"assets/logo2.png",
           description:" CSS3 is the latest evolution of the Cascading Style Sheets language.It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts."
       		},

       		{
           	title:"JavaScript",
           logo:"assets/logo3.png",
           description:" JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
       		}
        ];
}
