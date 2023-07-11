const name = 'SAKIB HASAN';
const getCount = (name) => {
    const result = {};
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        if (result[element]) result[element]++;
        else result[element] = 1;
    }
    return result;
};
// getCount(name);

// (
//     function() {
//         var a = b = 5;
//     })()

// console.log(b)

// for (let i = 0; i < 3; i++) {
//     console.log({ i })
//     setTimeout(function() { console.log("hello", i) }, 1000 + i);

// }

// function sum(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// sum `hello ${1} hi  ${2}`

const foo = () => console.log('First');
const bar = (i = 0) => setTimeout(() => console.log('Second', i), i);
const baz = () => console.log('Third');

bar(5);
foo();
baz();
baz();
baz();
baz();
baz();
baz();
baz();
baz();
baz();
baz();
bar(0);