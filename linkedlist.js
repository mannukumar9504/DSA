class Linkedlist {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    append(value) {
      const newNode = {value:value, next: null};
      
      if(this.tail) {
        this.tail.next = newNode; //{value:1 , next: {value:false, next: {value: 'mannu', next: {value: 'prateek': next: null}}}}
      }
      this.tail = newNode; //{value:1, next: null} 2. {value: false, next: null} 3. {value: 'mannu', next:null}4. {value: 'prateek', next: null}
      
      if(!this.head) {
        this.head = newNode; // {value: 1, next: null}
      }
      
    }
    preappend(value) {
        const newNode = {value: value, next: this.head};
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
    }
    
    toArray() {
      const elements = [];
      let curlNode = this.head;
      while(curlNode) {
        elements.push(curlNode);
          curlNode = curlNode.next;
      }
      return elements;
    }
  }
  const linkedlist = new Linkedlist();
  linkedlist.append(1);
  linkedlist.append(false);
  linkedlist.append("mannu");
  linkedlist.append("prateeek");
  linkedlist.preappend("firstValue");
  console.log(linkedlist.toArray());