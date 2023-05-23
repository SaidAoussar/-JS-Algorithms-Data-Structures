class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(value){
    const newNode = new LinkedListNode(value); // create new node
    if(!this.head){ // check if head is `null`
      this.head = newNode;
      this.tail = newNode;
      
      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode; // attach the reference the next key of the last node.
    this.tail = newNode; // attach the newNode to the tail
    /**
     * why this is work:
     * the head and tail point to same node. when we add the first element to list.
     * but after the first element. the next key of the last element of squence have same reference of Tail (all this in head)
     * when we change the this.tail.next = newNode mean we change the the last item in chain. 
     */
    return this;
  }

  prepend(value){
    // make new node to be head
    const newNode = new LinkedListNode(value,this.head);
    this.head = newNode;

    // if there is no tail yet let's make new node a tail.
    if(!this.tail){
      this.tail = newNode;
    }
    return this;
  }


  find(value){
    if(!this.head){
      return false;
    }
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === value){
        return true
      }

      currentNode = currentNode.next;
    }
   return false;
  }

  delete(value){
    if(!this.head) return null;

    let deleteNode = null;


    while(this.head && this.head.value === value){
      deleteNode = this.head;
      this.head = this.head.next;      
    }

    let currentNode = this.head;
    if(currentNode != null){
      while(currentNode.next){
        if(currentNode.next.value === value){
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        }else{
          currentNode = currentNode.next;
        }
      }
    }
    if(this.tail.value === value){
      this.tail = currentNode;
    }
    return deleteNode;
  }


   remove(value){
    if(!this.head) return false;
    let node = this.head;
    // check if the value equal the first node 
    if(node.value === value){
      // if is true , we check if head equal tail
      // if true we make head & tail Null
      // if false replace head node by next node head.next. that mean we remove the first node 
      if(this.head === this.tail){
        this.head = null;
        this.tail = null;
      }else{
        this.head = this.head.next
      }
      return true;
    }
    // we make iterator of node starting from second item.
    // we stop when curentNode.next === null and currentNode.next.value == value
    // we stop at the node before the node that contains the same value of node want to delete
    while(node.next && node.next.value != value){
      node = node.next;
    }
    if(node.next){
      // equal by reference
      // we check if the next node is tail (mean last item in linkedlist)
      if(node.next == this.tail){
        // we replace tail by the current node
        this.tail = node;
        // we replace the reference of currentNode.next by 'null'  
        this.tail.next = null;
      }else{
        // else we replace currentNode.next by next value of node we want to delete  
        node.next = node.next.next;
      }
      return true;
    }

    return false;
  }


  traverse(){
    const nodes = [];
    let currentNode = this.head;
    while(currentNode){
      nodes.push(currentNode.value);
      currentNode = currentNode.next
    }
    return nodes;
  }


  reverseTraversal(){
    if(this.tail){
      let currentNode = this.tail;

      while(currentNode !== this.head){
        let prevNode = this.head;
        while(prevNode.next !== currentNode){
          prevNode = prevNode.next;
        }
        console.log(currentNode.value)
        currentNode = prevNode;
      }
      console.log(currentNode.value);
    }
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString() {
    return this.toArray().map((node) => node.value).toString();
  }

}



class LinkedListNode{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}






const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(10);
linkedList.append(11);
linkedList.append(12);
linkedList.append(13);



linkedList.reverseTraversal();

// console.log("before delete: ",linkedList.toString());
// console.log("delete",linkedList.remove(11));
// console.log("after delete : ", linkedList.toString());

// console.log("---------------------");
// console.log(linkedList);
// console.log("---------------------");
// console.log(linkedList.toString());