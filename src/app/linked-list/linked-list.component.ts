import { Component, OnInit } from '@angular/core';
import { LinkedList } from '../../data-structures/LinkedList';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.css']
})
export class LinkedListComponent implements OnInit {
  list: LinkedList<number>;
  searchIndex: number;

  constructor() { }

  ngOnInit() {
    this.list = new LinkedList<number>(10);
    console.log(this.list);
  }

  onAdd(value: number): void {
    this.list.Add(value);
  }

  onRemove(value: number): boolean{
    return this.list.Remove(value);
  }

  onSearch(value: number): number {
    this.searchIndex = this.list.Find(n => n == value);
    return this.searchIndex;
  }

  getListItems(): string{
    return this.list.GetAll().join(', ');
  }

}
