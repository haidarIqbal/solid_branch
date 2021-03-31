import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transactions: [] = [];
  transactionTypes: string[] = [];
  constructor(private service: GetdataService) {}

  ngOnInit() {
    this.service.getJSON().subscribe((response) => {
      this.transactions = response.data;
      this.transactionTypes = this.service.transactionTypes;
      console.log(this.transactionTypes);
    });
  }

  getLength(type: string) {
    let result = this.transactions.filter(
      (transaction) => (transaction as any).type === type
    );
    return result.length;
  }
}
