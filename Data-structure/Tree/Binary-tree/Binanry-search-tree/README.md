# 이진 탐색 트리(BST)

그냥 이진 트리는 정렬 여부와 관계 없이 모든 노드가 둘 이하의 자식을 갖는 단순한 트리 형태였지만 BST는 **정렬된 트리**를 기반으로 한다.

부모노드를 기준으로 왼쪽에는 부모노드 값보다 작은 값이, 오른쪽에는 큰 값이 들어간다. 따라서 n개의 데이터 중 어떤 값을 찾기 위해서는 logN밖에 되지 않는 시간이 걸리기 때문에 매우 효율적이다.

## 자가 균형 이진 탐색 트리

하지만 루트노드부터 리프노드까지 한쪽 방향으로 쏠리는 **트리의 불균형**이 일어날 수 있기 때문에 트리의 균형을 맞추는 일이 매우 중요하다.

## Heap 과 BST

힙과 BST는 둘 다 트리를 기반으로 한 자료구조이기 때문에 얼핏 보면 생김새는 같다고 느낄 수 있다. 하지만 분명한 차이가 있고, 그 차이가 무엇인지 명확히 알고 있어야 한다.

**차이**는 바로 그 **목적**에 있다.

**이진 탐색 트리(BST)**는 정렬된 데이터를 기반으로 한 트리구조에서, 원하는 데이터를 찾고자 하는 것에 목적이 있다. 따라서 BST를 구성할 때는 이미 정렬되어있는 데이터이기 때문에 원하는 데이터를 찾으려면 탐색 시 시간복잡도가 O(logN) 밖에 걸리지 않기 때문에 뛰어난 효율을 보여준다.

반면 **Heap**은 항상 데이터의 최대, 최소 값을 찾는 것에만 집중한다. 최대 힙으로 구성하고자 하여 힙을 생성했다면 항상 트리의 root에는 데이터의 최대값이, 최소 힙으로 구성했다면 항상 트리의 root에는 데이터의 최소값이 존재한다. 따라서 BST는 부모 노드를 기준으로 더 작은 값은 왼쪽으로, 큰 값은 오른쪽으로 가지만 단순히 힙에서 자식간의 대소관계는 신경쓰지 않고 부모와 자식의 대소관계만 중요하게 여긴다. 여기서 또 중요한 점은 **힙 내부의 데이터들은 정렬된 상태가 아니라는 점**이다.

## 트리 순회

```python
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = Node("F",
            Node("B",
                 Node("A"),
                 Node("D",
                      Node("C"), Node("E"))
                 ),
            Node("G",
                 None,
                 Node("I", Node("H"))
                 )
            )

_pre = []
_in = []
_post = []

# 전위순회
def preorder(node:Node):
    if node is None:
        return
    _pre.append(node.val)
    preorder(node.left)
    preorder(node.right)

# 중위순회
def inorder(node:Node):
    if node is None:
        return
    inorder(node.left)
    _in.append(node.val)
    inorder(node.right)

# 후위순회
def postorder(node:Node):
    if node is None:
        return
    postorder(node.left)
    postorder(node.right)
    _post.append(node.val)

preorder(root)
inorder(root)
postorder(root)

print(*_pre)  # F B A D C E G I H
print(*_in)   # A B C D E F G H I
print(*_post) # A C E D B H I G F
```
