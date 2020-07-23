import { Component, OnInit } from '@angular/core';
import { Advert } from '../../shared/classes/advert';
import { AdvertService } from '../../shared/services/advert/advert.service';

@Component({
  selector: 'SMC-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss']
})
export class AdvertListComponent implements OnInit {
  filterSearch = '';
  filteredAdverts: Advert[] = [];
  adverts: Advert[] = [];

  constructor(
    private advertService: AdvertService,
  ) { }

  ngOnInit(): void {
    this.initializeAdverts();
  }
  initializeAdverts(){
    // this.advertService.getAllAdverts().subscribe(data => {
      // this.filterSearch = data.sort((a, b) => {
      //   return a.carPricePerDay - b.carPricePerDay;
      // });
    //   this.adverts = this.filterSearch;
    // });
      this.filteredAdverts = this.advertService.getAllAdverts().sort((a, b) => {
        return a.carPricePerDay - b.carPricePerDay;
      });
      this.adverts = this.filteredAdverts;
  }
  filterUsers(name){
    this.filteredAdverts = this.adverts;
    this.filteredAdverts = this.filteredAdverts.filter(advert => {
      return advert.name.toLowerCase().includes(name.toLowerCase());
    });
    return this.filteredAdverts;
  }
}
