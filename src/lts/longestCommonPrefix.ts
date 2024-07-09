export const longestCommonPrefix = (strs: string[]): string => {
  const sorted = strs.sort();

  const output = [];
  const firstword = sorted[0];
  const lastword = sorted[sorted.length - 1];
  for (let i = 0; i < firstword.length; i++) {
    if (firstword[i] == lastword[i]) {
      output.push(firstword[i]);
    } else {
      break;
    }
  }

  return output.join('');
};

// Below using Trie data structure instead:
class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }

  insert(char: string): void {
    if (!this.children.has(char)) {
      const newNode = new TrieNode();
      this.children.set(char, newNode);
    }
  }

  hasChild(): boolean {
    // Check if the map is not empty
    return this.children.size > 0;
  }
}

export const longestCommonPrefixTrie = (strs: string[]): string => {
  if (strs.length === 0) return '';

  // Insert all strings into the Trie
  const root = new TrieNode();
  for (const str of strs) {
    let currentNode = root;
    for (const char of str) {
      currentNode.insert(char);
      currentNode = currentNode.children.get(char)!;
    }
    currentNode.isEndOfWord = true;
  }

  // Find the longest common prefix
  let currentNode = root;
  let prefix = '';
  while (currentNode?.hasChild()) {
    const chars = Array.from(currentNode.children.keys());
    if (chars.length === 1) {
      prefix += chars[0];
      currentNode = currentNode.children.get(chars[0])!;
    } else {
      break;
    }
  }

  return prefix;
};
