import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
// import { Employee } from '@angular/core';
// import { DataPipe } from 'angular/common';
@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css'],
  // providers: [DataPipe]
})
export class StructureDirectiveComponent implements OnInit {
  // f1:boolean = false;
  // f2:boolean = true;
  // b1:string="show";
  // flag:boolean= false;
  stdNames:Array<string> = []
  Id:Array<string> = []
  Task:Array<string> = []
  Deadline:Array<string> = []

  employees:Array<Employee> = new Array();

  constructor() { 
    let emp1 = new Employee(100,"Raj", 12000,"task",100);
    let emp2 = new Employee(100,"Raju", 15000,"task",100);
    let emp3 = new Employee(100,"Ramesh", 18000,"task",100);

    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
  }

  ngOnInit(): void {
  }

  

  // changeValue(){
  //   this.f1 = true;
  //   this.f2 = false;
  // }

  // toggle() {
  //   if(this.flag){
  //     this.flag = false;
  //     this.b1 = "Show";
  //   }else {
  //     this.flag = true;
  //     this.b1 = "Hide";
  //   }
    
  // }

  addName(nameRef:any, idRef:any, taskRef:any,deadlineRef:any) {
    let name = nameRef.value;
    this.stdNames.push(name); // adding dynamic names 
    let id = idRef.value;
    this.Id.push(id); // adding dynamic ids 
    let task = taskRef.value;
    this.Task.push(task); // adding dynamic tasks 
    let deadline = deadlineRef.value;
    this.Deadline.push(deadline); // adding dynamic deadlines 
  
  }

}
