//constructor function for Map Object
let maps = new Map ([
	['kabc', 1],
	['kdef', 2],
	['gei', 3]
]);

console.log(maps);
//map { 'kabc': 1, 'kdef': 2, 'gei': 3}

let mapHash = new Map ();
mapHash.set('Precious','german shepherd');
mapHash.set('Sushi','Poodle');
mapHash.set('Petunia','retriever');
mapHash.set('lilly','husky');

console.log(mapHash.get('Sushi'));