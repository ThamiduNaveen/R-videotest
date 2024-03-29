import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: "Medicine",
      path: "/menu/medicine-tabs"
    },
    {
      title: "Panivida",
      path: "/menu/panivida-tabs"
    }
  ];

  private selecedPath: string = '';

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selecedPath = event.url;
      }
    })
  }

  ngOnInit() {
  }

}
