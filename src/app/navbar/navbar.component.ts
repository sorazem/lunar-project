import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.route);
  }

  checkRoute() {
   if(this.route.snapshot.routeConfig.path == 'home')
    return true;
   else
    return false;
  }

}
