import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { User } from '../model/user';
import {} from '../../../node_modules/hash-base'
import { AdminSevice } from '../services/admin.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss','../../assets/css/animation-css.scss']
})
export class AddadminComponent implements OnInit {

  btnText = "Add user";
  headingText = "Add new user";

  adminForm : FormGroup;  
  allUsers = [];
  editingMode = false;
  selectedUserId : number;
  showTick = false;


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  constructor(private formBuilder : FormBuilder, private adminService: AdminSevice) { }
  

  ngOnInit() {
      this.getData();

    this.adminForm = this.formBuilder.group({
      firstName : ['' , Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      role:['',Validators.required],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPass: ['', Validators.required]
    },
    {
      validator: this.confirmPasswordValidator
    });
  
  }

  getData(){
    this.adminService.getAllAdmins().subscribe(data => {
      this.allUsers = data;
    });
  }

  confirmPasswordValidator(form: FormGroup){
    return form.controls['password'].value === form.controls['confirmPass'].value ? null : {mismatch : true};
  }

  saveUser(user: User){
      delete user.confirmPass;
     if(this.btnText === "Add user"){

       this.adminService.addUser(user).subscribe(data => {
         this.adminForm.reset();
         this.getData();
         this.showSuccessAnimation();
        })
      }else{
        this.adminService.updateUserById(this.selectedUserId,user).subscribe(data => {
          this.adminForm.reset();
          this.getData();
          this.cancel();

          this.showSuccessAnimation();

        })
      }
  }

  selectedUser(user: User){
    console.log(user);
    this.editingMode = true;
    this.btnText = "Update user";
    this.headingText = "Update user";
    this.adminForm.controls['firstName'].setValue(user.firstName);
    this.adminForm.controls['lastName'].setValue(user.lastName);
    this.adminForm.controls['email'].setValue(user.email);
    this.adminForm.controls['password'].setValue(user.password);
    this.adminForm.controls['confirmPass'].setValue(user.password);
    this.adminForm.controls['role'].setValue(user.role);
    this.selectedUserId = user.id;
  }

  cancel(){
    this.editingMode = false;
    this.btnText = "Add user";
    this.headingText = "Add new user";
    this.adminForm.reset();
    this.getData();
  }

  deleteUser(){
      this.adminService.deleteUserById(this.selectedUserId).subscribe(data => {
        this.showSuccessAnimation();
        this.cancel();
      })
    }
    
    showSuccessAnimation(){
      this.showTick = true;
      setTimeout(()=>{
        this.showTick = false;
      },3000);
  }
}
