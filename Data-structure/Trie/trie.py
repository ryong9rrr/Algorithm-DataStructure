from collections import defaultdict
class TrieNode:
    def __init__(self):
        self.word = False
        self.children = defaultdict(TrieNode)

class Trie:
    def __init__(self):
        self.root = TrieNode()

    # 단어 삽입
    def insert(self, word:str)->None:
        node = self.root
        for char in word:
            node = node.children[char]
        node.word = True

    # 단어가 존재하는지
    def search(self, word:str)->bool:
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.word

    # 해당 문자열로 시작하는 단어가 존재하는지
    def startsWith(self, prefix:str)->bool:
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True

trie = Trie()
trie.insert("apple")
print(trie.search("apple"))   # True
print(trie.search("app"))     # False
print(trie.startsWith("app")) # True
trie.insert("app")
print(trie.search("app"))     # True