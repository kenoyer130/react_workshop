import Slide from '../Slide';

const slide =  Slide (`
# Arrow Functions
* Don't write the word *function* again!

*ES5*
\`\`\`
nums.forEach(function(i) {
    console.log(i);
})
\`\`\`

*ES6*
\`\`\`
nums.forEach(i => {
    console.log(i);
})
\`\`\`

* auto bind to solve *this* problem

*ES5*
\`\`\`
this.bind(foo);

...

function foo() {
    this.y = 3
}
\`\`\`

*ES6*
\`\`\`
foo = () => {
    this.y = 3
}
\`\`\`

`);     

export default slide;