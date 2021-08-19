import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-exam',
  templateUrl: './tdf-exam.component.html',
  styleUrls: ['./tdf-exam.component.css']
})
export class TdfExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allQuestion=[ 
    {question:"8+8",ans1:"16",ans2:"15",ans3:"17",ans4:"19",correctAns:"16"},
    {question:"9+9", ans1:"18",ans2:"17",ans3:"19",ans4:"11",correctAns:"18" },
    {question:"1+9", ans1:"18",ans2:"10",ans3:"19",ans4:"11",correctAns:"10" },
    {question:"2+9", ans1:"18",ans2:"11",ans3:"19",ans4:"11",correctAns:"11" },
    {question:"3+9", ans1:"12",ans2:"17",ans3:"19",ans4:"11",correctAns:"12" },
    {question:"4+9", ans1:"18",ans2:"17",ans3:"13",ans4:"11",correctAns:"13" },
    {question:"5+9", ans1:"18",ans2:"17",ans3:"19",ans4:"14",correctAns:"14" },
    {question:"6+9", ans1:"18",ans2:"17",ans3:"19",ans4:"15",correctAns:"15" },
    {question:"7+9", ans1:"18",ans2:"16",ans3:"19",ans4:"11",correctAns:"16" },
    {question:"8+9", ans1:"18",ans2:"17",ans3:"17",ans4:"11",correctAns:"17" }
  ]

}
