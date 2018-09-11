export class DynamicArray{
  private items: number[];
  private size: number;
  private growthFactor = 2;

  constructor(){
    this.items = [];
    this.size = 0;
  }

  public Capacity(): number{
    return this.items.length;
  }

  public Count(): number{
    return this.size;
  }

  /**
   * Provides a new copy of the underlying array
   */
  public GetCopy(): number[]{
    return [...this.items];
  }

  /**
  * Adds a number to the Dynamic Array, doubling the size if there is no space.
  * @param value The number to add to the Dynamic Array
  * */
  public Add(value: number): void{
    if(this.size + 1 > this.Capacity()){
      let newArray = new Array(this.Capacity() * this.growthFactor);
      for (let i = 0; i < this.items.length; i++) {
        newArray[i] = this.items[i];        
      }
      this.items = newArray;
    }
    this.items[this.size] = value;
    this.size++;
  }

  /**
   * Removes the first value from the Dynamic Array
   * @param value The number to remove from the Dynamic Array
   */
  public Remove(value: number): boolean{
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == value){
        this.items.splice(i, 1);
        this.size--;
        return true;
      }      
    }
    return false;
  }

  /**
   * Removes all matching occurences of the given value from the Dynamic Array
   * @param value The number(s) to remove from the Dynamic Array
   * @returns Returns true if an element was removed, or false if none matched
   */
  public RemoveAll(value: number): boolean{
    let filtered = this.items.filter(i => i !== value);
    let newArray = new Array(this.Capacity());
    for (let i = 0; i < filtered.length; i++) {
      newArray[i] = filtered[i];
    }
    this.items = newArray;
    if(this.size != this.items.length){
      this.size = filtered.length;
      return true;
    }
    return false;
  }

  /**
   * Finds the index of the first matching value
   * @param value The number to search the Dynamic Array for
   * @returns Returns -1 if no match is found
   */
  public Find(value: number): number{
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i] == value){
        return i;
      }      
    }
    return -1;
  }

  /**
   * Finds values in an array and builds an array of their indicies.
   * @param value The number to search the Dynamic Array for
   * @returns Returns an array of indicies containing the matching value
   */
  public FindAll(value: number): number[]{
    let matchingIndiciesArray = [];
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i] == value){
        matchingIndiciesArray.push(i);
      }      
    }
    return matchingIndiciesArray;
  }

}

/* INSTRUCTIONS:
Create a DynamicArray data structure with basic operations:
Add (one value at a time)
Remove (the first matching value)
RemoveAll (all matching values)
Find (the index of a matching value)

The DynamicArray should be backed by an Array which
should double in size when adding to a full DynamicArray



*/