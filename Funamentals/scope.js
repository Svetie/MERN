var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
        var name = names[index];    //var is available for entire funcion block, even outside of the for loop

        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);
// var -> functionally scoped
// let -> block scoped
// global scope: beatles, printNames

// scope for printNames

// scope for actuallyPrintingNames

// scope for for loop (block scope)

// const and let are block scoped