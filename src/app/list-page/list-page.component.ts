import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';
import { User } from './User.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  tab: number = 0;
  currentTable: User[] = [];
  transactionTypes: string[] = [];

  constructor(private route: ActivatedRoute, private service: GetdataService) {}

  ngOnInit() {
    this.transactionTypes = this.service.transactionTypes;
    this.getCurrentTable();
  }

  getCurrentTable() {
    this.route.queryParamMap.subscribe((query) => {
      this.currentTable = [];
      this.tab = query.get('tab') as any;
      this.service.getJSON().subscribe(({ data }) => {
        data.map((transaction: User) => {
          let index = this.transactionTypes[this.tab];
          if ((transaction as any).type === index) {
            this.currentTable.push(transaction);
          }
        });
      });
    });
  }
}
