function find_same_name(n) {
  let results = new Set();
  let len = n.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (n[i] === n[j]) {
        results.add(n[i]);
      }
    }
  }
  return results;
}

const list = ["tom", "jerry", "tom", "jerry"];
console.log(find_same_name(list));
