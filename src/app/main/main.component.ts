import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger,state,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
         
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        
        backgroundColor: 'darkblue'
      })),
      transition('open => closed', [
        animate('0.25s')
      ]),
      transition('closed => open', [
        animate('0.25s')
      ]),
    ]),
  ],
  templateUrl: './main.component.html',
  styles: [`
    
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class MainComponent implements OnInit {
  
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
}
speed = 5;

sortingAlgorithmType = 'Select Algorithm';
pindex:number;
temparr : number [] = new Array(65) ;
array : any[] =[
  {"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},
  {"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},
  {"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},
  {"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},
  {"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},
  {"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true},{"val":12,"state":true}
  
];

private delay(ms: number)
{ let delay = ms*this.speed/5;
  return new Promise(resolve => setTimeout(resolve, delay));
}

openScrollableContent(longContent) {
  this.modalService.open(longContent, { scrollable: true } );
  
}


setArray()
{
  for(let i = 0 ; i < this.array.length; ++i)
  {
    this.array[i].val  = Math.floor(Math.random()*20);
  }
  console.log(this.speed);
 
}

f1()
{
  this.sortingAlgorithmType = "Quick_Sort"
  console.log(this.array.length);
}
f2()
{
  this.sortingAlgorithmType = "Merge_Sort"
}
f3()
{
  this.sortingAlgorithmType = "Selection_Sort"
}
f4()
{
  this.sortingAlgorithmType = "Bubble_sort"
}


applySortingAlgorithm()
{
  if(this.sortingAlgorithmType =="Quick_Sort")
  {
      this.quickSort(0,this.array.length-1);
  }
  if(this.sortingAlgorithmType =="Merge_Sort")
  {
      this.array = mergeSort(this.array);
  }
  if(this.sortingAlgorithmType =="Selection_Sort")
  {
      this.selectionSort();
  }
  if(this.sortingAlgorithmType =="Bubble_sort")
  {
      this.bubbleSort();
  }
  

}

async bubbleSort()
{
  for(let i = 0;i<this.array.length ; ++i)
  {
    for(let j=i+1 ; j<this.array.length ; ++j)
    {
      if(this.array[j].val < this.array[i].val)
      {
        let temp;
        this.array[i].state = !this.array[i].state;
        this.array[j].state = !this.array[j].state;
        await this.delay(50);
        temp = this.array[i].val;
    
        this.array[i].val = this.array[j].val
        this.array[i].state = !this.array[i].state;
    
        
    
        this.array[j].val = temp;
        this.array[j].state = !this.array[j].state;
      }
    }
  }
}

async selectionSort()
{
  for(let i = 0;i<this.array.length-1 ; ++i)
  { let minIndex = i;
    for(let j=i+1 ; j < this.array.length ; ++j)
    {
      if(this.array[j].val < this.array[minIndex].val)
      {
        minIndex = j;
      }
    }
    let temp;
        this.array[i].state = !this.array[i].state;
        this.array[minIndex].state = !this.array[minIndex].state;
        
        await this.delay(100);
    
        temp = this.array[i].val;
    
        this.array[i].val = this.array[minIndex].val;
        this.array[i].state = !this.array[i].state;
    
        
    
        this.array[minIndex].val = temp;
        this.array[minIndex].state = !this.array[minIndex].state;
  }
}
async partition(l:number,h:number)
{
    let pivot:number,Index:number,i:number;
    Index = l;
    pivot = h;
    for(i = l; i < h ; i++)
    {
      if(this.array[i].val < this.array[pivot].val)
      {
        let temp;
        this.array[i].state = !this.array[i].state;
        this.array[Index].state = !this.array[Index].state;
        
        await this.delay(150);
    
        temp = this.array[i].val;
    
        this.array[i].val = this.array[Index].val;
        this.array[i].state = !this.array[i].state;
    
        this.array[Index].val = temp;
        this.array[Index].state = !this.array[Index].state;
        Index++;
      }
    }
    let temp;
        this.array[pivot].state = !this.array[pivot].state;
        this.array[Index].state = !this.array[Index].state;
        
        await this.delay(150);
    
        temp = this.array[pivot].val;
    
        this.array[pivot].val = this.array[Index].val;
        this.array[pivot].state = !this.array[pivot].state;
    
        
    
        this.array[Index].val = temp;
        this.array[Index].state = !this.array[Index].state;
        this.pindex = Index;

}
async quickSort(l:number,h:number)
{
    let pindex:number;
    if(l<h)
    {
      await this.partition(l,h);
      pindex = this.pindex;
      this.quickSort(l,pindex-1);
      this.quickSort(pindex+1,h);
    }
}



  
}

export function mergeSort(array: any[]): any[] {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

/** Merge (conquer) step of mergeSort */
function merge(left: any[], right: any[]): any[] {
  const array: any[] = [];
  let lIndex = 0;
  let rIndex = 0;
  while (lIndex + rIndex < left.length + right.length) {
    let temp1 = left[lIndex].val;
    let temp2 = right[rIndex].val;
    const lItem = {"val":temp1,"state":true};
    const rItem = {"val":temp2,"state":true};
    
    if (lItem == null) {
      array.push(rItem); rIndex++;
    }
    else if (rItem == null) {
      array.push(lItem); lIndex++;
    }
    else if ( lItem.val < rItem.val ) {
      array.push(lItem); lIndex++;
    }
    else {
      array.push(rItem); rIndex++;
    }
  }
  return array;
}
