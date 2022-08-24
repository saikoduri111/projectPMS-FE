import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private router:Router) { }
  goToHome(){
      this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
