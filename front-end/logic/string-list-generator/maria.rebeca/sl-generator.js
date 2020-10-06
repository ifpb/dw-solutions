function createList(n, s = "Text"){

    let uli = "<ul>";
    let ulf = "\n</ul>"

    let txt;
    let result = uli;
    

    for (let i = 1; i <= n; i++){
        txt = "\n<li>"+ s + " " + i + "</li>";
        result = result.concat(txt);
    }

    result = result.concat(ulf);
    return result;
}

console.log(createList(3));
console.log(createList(5, "Item"));