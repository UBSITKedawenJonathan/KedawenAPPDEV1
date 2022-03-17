import { Component, OnInit } from '@angular/core';
export interface Student{
  idnumber:string;
  name:string;
  dateadded:Date;
  course:string;
}
@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})

export class CourseInfoComponent implements OnInit {
  student: Student = {
    idnumber: '20193060',
    name: 'jonathan',
    dateadded: new Date(2010,12,16),
    course:'BSCS'
  };
  student1: Student = {
    idnumber: '123',
    name: 'John',
    dateadded: new Date(2017,11,13),
    course:'BSIT'
  };
  student2: Student = {
    idnumber: '5123',
    name: 'Abraham',
    dateadded: new Date(2018,10,14),
    course:'BSCS'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
