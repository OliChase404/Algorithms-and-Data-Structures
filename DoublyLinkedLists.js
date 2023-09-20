


class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
        this.length += 1
        return this
    }
    pop(){
        if (this.length === 0) return undefined
        let popped = this.tail
        if (this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = popped.prev
            this.tail.next = null
        }
        this.length -= 1
        return popped
    }
    shift(){
        if(this.length === 0) return undefined
        let shifted = this.head 
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = shifted.next
            this.head.prev = null
            shifted.next = null
        }
        this.length -= 1
        return shifted
    }
    unshift(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
        }
        this.head = newNode
        this.length += 1
        return newNode
    }
}

