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