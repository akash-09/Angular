import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService
{
    employeeDetail = [
        {id:1,name:'abc',dept: 'CSE'},
        {id:2,name:'xyz',dept: 'ME'}, 
        {id:3,name:'def',dept: 'CE'}
      ]
      getemployee(){
          return this.employeeDetail
      }
      setemployee(emp)
      {
            this.employeeDetail.push(emp)
      }
}