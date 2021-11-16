# Linked List

- Linked List
- Double Linked List
- Circular Linked List

## Linked List

단방향 구조

**python**

```python
class Node:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self, data=None):
        self.head = Node(data)

    def desc(self):
        node = self.head
        while node:
            print(node.data, end=" ")
            node = node.next

    def search(self, data):
        node = self.head
        while node:
            if node.data == data:
                return node
            else:
                node = node.next

    def add(self, data):
        if not self.head:
            self.head = Node(data)
        else:
            node = self.head
            while node.next:
                node = node.next
            node.next = Node(data)

    def delete(self, data):
        if not self.head:
            print("empty list")
            return

        if self.head.data == data:
            temp = self.head
            self.head = self.head.next
            del temp
        else:
            node = self.head
            while node.next:
                if node.next.data == data:
                    temp = node.next
                    node.next = node.next.next
                    del temp
                    return
                else:
                    node = node.next

ll = LinkedList()
ll.desc()
# None

for i in range(10):
    ll.add(i)

ll.desc()
# None 0 1 2 3 4 5 6 7 8 9

```

## Double Linked List

양방향 구조

## Circular Linked List

마지막 노드가 null을 가리키지 않고 head를 가리키는 순환식 구조
