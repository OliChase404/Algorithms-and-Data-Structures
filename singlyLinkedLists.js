

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const first = new Node('Hi')
first.next= new Node('there!')


class SinglyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        const newNode = new Node(val)
        if(!this.head || !this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    this.length += 1
    return this
    }
    pop(){
        if(!this.head){
            return undefined
        }
        if(this.length === 1){
            removed = this.head
            this.head = null
            this.tail = null
            this.length = 0
            return removed
        }
        let current = this.head
        while(current.next.next){
            current = current.next
        }
        removed = this.tail
        current.next = null
        this.tail = current
        this.length -= 1
        return removed
    }
    shift(){
        if(!this.head){
            return undefined
        }
        oldHead = this.head
        if(!this.head.next){
            this.head = null
            this.tail = null
            this.length = 0
            return oldHead
        }
        this.head = this.head.next
        this.length -= 1
        return oldHead
    }
    unshift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
                newNode.next = this.head
                this.head = newNode
        }
        this.length += 1
        return this
    }
}