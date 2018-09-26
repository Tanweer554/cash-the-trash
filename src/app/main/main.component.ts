import { Component, OnInit } from '@angular/core';
import { NoviceService } from '../novice.service';
import { TerminateService } from '../terminate.service';
import { GethttpService } from '../gethttp.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
				 userdata: any[];
				 todo:any;
				 httpdata:any=[];
				 errorMessage:string='loading.....';
  constructor(private noviceservice:NoviceService,private terminateservice:TerminateService,private gethttpservice:GethttpService) { }

  ngOnInit() {
		this.userdata=this.noviceservice.getuserdata();
		this.todo=this.terminateservice.gettodaydate();
		this.httpdata=this.gethttpservice.getjsondata().subscribe((data)=>{
			return this.httpdata=data;
		},(err)=>{
			console.log(err);
			this.errorMessage=err.message;
		});
  }
color:string;

emp=[
   	{name:"amar",course:"HTML",fee:"5000",dob:new Date("04/23/1997") },
   	{name:"baby",course:"CSS",fee:"6000",dob:new Date("04/23/1996") },
   	{name:"chaithu",course:"JS",fee:"7000",dob:new Date("04/23/1995") },
   	{name:"tanweer",course:"ANGULAR JS",fee:"8000",dob:new Date("04/23/1994") },
   	{name:"divya",course:"BOOTSTRAP",fee:"9000",dob:new Date("04/23/1993") },
   	{name:"sam",course:"JAVA",fee:"10000",dob:new Date("04/23/1992") },
   	{name:"kunal",course:"DOTNET",fee:"11000",dob:new Date("04/23/1991") },
   	{name:"ramya",course:"HADOOP",fee:"12000",dob:new Date("04/23/1990") },
   	{name:"gynapika",course:"PYTHON",fee:"13000",dob:new Date("04/23/1989") },
   	{name:"deepu",course:"MONGODB",fee:"14000",dob:new Date("04/23/1988") }

   	];
}

