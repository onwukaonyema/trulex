import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'trulex';
  showPreloader = true;

  ngOnInit(): void {
    initFlowbite();
    window.onload = () => {
      this.showPreloader = false;
    };
  }
  ngAfterViewInit() {
    AOS.init();
  }
}
