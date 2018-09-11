import { Component, OnInit } from '@angular/core';
import { DynamicArray } from '../../data-structures/DynamicArray';

@Component({
  selector: 'app-dynamic-array',
  templateUrl: './dynamic-array.component.html',
  styleUrls: ['./dynamic-array.component.css']
})
export class DynamicArrayComponent implements OnInit {
  array: DynamicArray;
  searchIndex: number;

  constructor() { }

  ngOnInit() {
    this.array = new DynamicArray();
    console.log(this.array);
  }

  onAdd(value: number): void{
    this.array.Add(value);
    console.log(this.array);
  }

  onRemove(value: number): boolean{
    console.log(this.array);
    return this.array.Remove(value);
  }

  onRemoveAllOccurences(value: number): boolean{
    console.log(this.array);
    return this.array.RemoveAll(value);
  }

  onSearch(value: number): number{
    console.log(this.array);
    this.searchIndex = this.array.Find(value);
    return this.searchIndex;
  }

  getArrayItems(): string{
    return this.array.GetCopy().join(', ');
  }

}
