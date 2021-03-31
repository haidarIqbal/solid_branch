import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  transactions: [] = [];
  transactionTypes: string[] = [];
  currentTable: object[] = [];
  currentTab = 0;
  constructor(private http: HttpClient) {
    this.getData();
  }

  public getData() {
    this.getJSON().subscribe((query) => {
      this.transactions = query.data;
      this.getTypes();
    });
  }

  public getTypes() {
    this.transactions.map((transaction: object) => {
      let tab = this.transactionTypes[0];
      if (this.transactionTypes.indexOf((transaction as any).type) == -1) {
        this.transactionTypes.push((transaction as any).type);
      }
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/transactions.json');
  }
}
