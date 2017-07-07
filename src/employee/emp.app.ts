import {Component} from '@angular/core';
import {Employee} from '../employee/employee'
@Component({
    selector:'emp-root',
    templateUrl: './emp.html',

})
export class empcomp
{
    title='Employee details';
    empobj:Employee=new Employee();
    employees:Array<Employee>=new Array<Employee>();
   addemployee()
   {
this.employees.push(this.empobj);
this.empobj=new Employee();
   }
       
   
   }


