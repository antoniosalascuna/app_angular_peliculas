import { ApiserviceService } from './../../services/apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  img1: string = 'assets/img/logo.jpg';
  constructor(private api: ApiserviceService) { }

  ngOnInit(): void {
  }
}
