function createList(num,text="Text"){
	array= "<ul>";
	count= 0;
	while (count < num) {
		array+= `<li>${text}, ${count}</li>`;
		count +=1;
	};
	array+="</ul>";
	return array;
};

console.log(createList(3));
console.log(createList(5,"Item"));

