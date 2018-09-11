import { Predicate } from "@angular/core";

export class LinkedList<T>{
  private head: Node<T>;
  private tail: Node<T>;
  private length: number;

  constructor(data: T){
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  public Count(): number {
    return this.length;
  }

  public Add(data: T): void {
    let node = new Node(data);
    if(this.head == null){
      this.head = node;
      this.tail = this.head;
    }
    else{
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  public Remove(data: T): boolean {
    if (this.head.data == data){
      this.head = this.head.next;
      this.length--;
      return true;
    }
    let currentNode = this.head;
    while(currentNode.next != null && currentNode.next.data != data){
      currentNode = currentNode.next;
    }
    if(currentNode.next.data == data){
      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      if(currentNode.next == null){
        this.tail = currentNode;
      }
      deletedNode = null;
      this.length--;
      return true;
    }
    return false;
  }

  public RemoveAt(index: number): boolean {
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    if(currentNode.next != null){ 
      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      if(currentNode.next == null){
        this.tail = currentNode;
      }
      deletedNode = null;
      this.length--;
      return true;
    }
    return false;
  }

  public Find(match: Predicate<T>): number {
    if(match == null)
      throw "Bad Predicate Input";

    let compareNode = this.head;
    let index = 0;
    while(compareNode){
      if(match(compareNode.data)){
        return index;
      }
      compareNode = compareNode.next;
      index++;
    }
    return -1;
  }

  public GetAll(): T[]{
    let node = this.head;
    let nodeArray: T[] = [];
    while(node){
      nodeArray.push(node.data);
      node = node.next;
    }
    return nodeArray;
  }
}

class Node<T>{
  data: T;
  next: Node<T>;

  constructor(data: T){
    this.data = data;
    this.next = null;
  }
}