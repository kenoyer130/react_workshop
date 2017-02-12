import Slide from '../Slide';

const slide =  Slide (`
# Classes
* inheritance
* super calls
* static methods
* constructors
* these are Javascript suger of prototype-based OO. They will suprise you compared to Java/C#

\`\`\`
class MyClass extends MyBase {
    constructor(arg) {
        super(arg);
    }

    update(arg) {
        super.update(arg);
    }

    static static_foo() {
        ...
    }
}
\`\`\`

`);     

export default slide;