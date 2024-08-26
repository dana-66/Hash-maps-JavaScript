//pet store employee data

let hashTable = new Map();

hashTable.set('Emilee','293-0988');
hashTable.set('Jason','763-3452');
hashTable.set('Pat','222-2222');

console.log(hashTable);
console.log(hashTable.size);

hashTable.delete('Jason');
console.log(hashTable);
console.log(hashTable.size);
