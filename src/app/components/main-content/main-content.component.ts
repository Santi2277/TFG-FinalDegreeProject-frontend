import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(value: string) {
    if (value==="ejercicios") {
        this.router.navigateByUrl('/main');
    }else if(value==="rutinas"){
      this.router.navigateByUrl('/main/rutinas');
    }else if(value==="entrenadores"){
      this.router.navigateByUrl('/main/entrenadores');
    }
    
}

}
