


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
    get(index){
        if(this.length <= 0 || index >= this.length) return undefined
        let found
        let i
        if(index >= (this.length - 1) / 2){
            i = (this.length - 1) - index
            found = this.tail
            while(i !== 0){
                found = found.prev
                i -= 1
            }
        } else {
            i = 0
            found = this.head
            while(i < index){
                found = found.next
                i += 1
            }
        }
        return found
    }
    set(index, value){
        found = this.get(index)
        if(!found) return false
        found.value = value
        return true
    }
    insert(index, value){
        if(index < 0 || index > this.length) return false
        if(index === 0) return this.unshift(value)
        if(index === this.length) return this.push(value)
        let newNode = new Node(value)
        let newNext = this.get(index)
        newNode.next = newNext
        newNode.prev = newNext.prev
        newNext.prev = newNode
        return true
    }
}

