import Slide from '../Slide';

const slide =  Slide (`
# Modules
* properly scope classes and functions
* stop polluting the global namespace!

\`\`\`
// file: my_module.js
// this method is private to the file
_foo() {
    ...
}

// this method can be imported to another module
export foo() {
    ...
}


my_module() {
    ...
}

// this function is the default import for this module
export default my_module;

\`\`\`

`);     

export default slide;