import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-exam',
  templateUrl: './mdf-exam.component.html',
  styleUrls: ['./mdf-exam.component.css']
})
export class MdfExamComponent implements OnInit {
  myForm: FormGroup;
  constructor(public form:FormBuilder) { // build form dynamically creating DI
    this.myForm=form.group({});

  }
  // life cycle method this will call after constructor
  ngOnInit(): void {
    this.allQuestion.forEach(q=> {
      this.myForm?.addControl(q.question,this.form.control(""));

      // user:new FormControl();
      //q.question
    })
  }

  submit(){
    console.log(this.myForm);
  }

  allQuestion=[
    {question:"3 + 4", ans1:"10",ans2:"12",ans3:"19",ans4:"7",correctAns:"7"},
    {question:"5-4",ans1:"0",ans2:"1",ans3:"9",ans4:"8",correctAns:"1"  }
   ]
}
