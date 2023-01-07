class ListNode:
    def __init__(self, key=None, value=None):
        self.key = key
        self.value = value
        self.next = None

class MyHashMap:

    def __init__(self):
        self.size = 1000
        self.table = collections.defaultdict(ListNode)
    
    # 간단히 해시 값을 구하는 함수
    def get_hash(self, key: int):
        return key % self.size

    def put(self, key: int, value: int) -> None:
        index = self.get_hash(key)

        # 만약 존재하지 않는 인덱스라면
        if self.table[index].value is None:
            self.table[index] = ListNode(key, value)
            return

        # 존재한다면 값을 찾는다.
        p = self.table[index]
        while p:
            if p.key == key:
								# 인덱스와 키가 모두 같은 이런 경우에 값을 넣는다는 것은,
								# 새로운 값을 갱신하겠다는 것으로 본다.
                p.value = value
                return
            if p.next is None:
                break
            p = p.next
        p.next = ListNode(key, value)

    def get(self, key: int) -> int:
        index = self.get_hash(key)

        # 존재하지 않는 인덱스라면
        if self.table[index].value is None:
            return -1

        # 존재한다면 값을 찾는다.
        p = self.table[index]
        while p:
            if p.key == key:
                return p.value
            p = p.next
        return -1

    def remove(self, key: int) -> None:
        index = self.get_hash(key)
        # 존재하지 않는 인덱스라면
        if self.table[index].value is None:
            return

        # 인덱스의 첫 번째 노드라면
        p = self.table[index]
        if p.key == key:
            self.table[index] = ListNode() if p.next is None else p.next
            return

        # 그렇지 않다면 연결리스트에서 찾아서 삭제한다.
        prev = p
        while p:
            if p.key == key:
                prev.next = p.next
                return
            prev, p = p, p.next



# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)