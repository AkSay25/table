import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iemployee, Ifruit, Iuser } from '../models/interface';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
   //Array of Lists Items
   listItemsFruits:Array<Ifruit> = [];
   listItemsvegi:Array<string> = [];
   employeData:Array<Iemployee> = [];
   UserData:Array<Iuser> = [];

   //getting element from template
    @ViewChild('inputRef') inputRefVeg!:ElementRef;
    @ViewChild('inputRef') inputRefFruit!:ElementRef;

    //user Input Access
     @ViewChild('nameInput') nameInput!: ElementRef;
    @ViewChild('ageInput') ageInput!: ElementRef;
    @ViewChild('emailInput') emailInput!: ElementRef;


   ngOnInit(): void {
    this.listItem();
    this.loadTableData();

  }

  onAddFruits(fruit:HTMLInputElement){
      let newFruit:Ifruit = {
        FruitName : fruit.value};
      this.listItemsFruits.push(newFruit);
  }

  //locatstorage list
   listItem(){
    //recived value from key locatstorage
    let list = localStorage.getItem('listItems');
    this.listItemsvegi =  list ? JSON.parse(list) : [];
   }

   onAdd(){
    //adding value to list
    let Value = this.inputRefVeg.nativeElement.value;
    console.log(Value);

    this.listItemsvegi.push(Value);
    //setting value to localstorage
    localStorage.setItem('listItems',JSON.stringify(this.listItemsvegi));
    //reset input
    this.inputRefVeg.nativeElement.value = '';
   }



   //table Employee

   onAddEmp(user:HTMLInputElement,id:HTMLInputElement,role:HTMLInputElement){
     let NewUser:Iemployee = {
      EmpName: user.value,
        Id: +id.value,
        Role: role.value,
     }
     console.log(NewUser);
     this.employeData.push(NewUser);
   }

   //Add User [Localstorage]

  // Load data from local storage
  loadTableData() {
    let data = localStorage.getItem('tableData');
    this.UserData = data ? JSON.parse(data) : [];
  }

  // Add new row
  addUsers() {
    const name = this.nameInput.nativeElement.value;
    const age = this.ageInput.nativeElement.value;
    const email = this.emailInput.nativeElement.value;

      this.UserData.push({ name, age, email });

      // Save to local storage
      localStorage.setItem('tableData', JSON.stringify(this.UserData));

      // Clearing inputs
      this.nameInput.nativeElement.value = '';
      this.ageInput.nativeElement.value = '';
      this.emailInput.nativeElement.value = '';
    }
  }




