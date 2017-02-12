import Slide from '../Slide';

const slide =  Slide (`
# Render method
* Every React component must have a render function
* This is a function and must return something and can return only one thing
* Best practice is to wrap the return in ( )


\`\`\`
    render() {
        return (
            <div>
               <Hello />
               <Goodby />
            </div>
        )
    }

\`\`\`

* Don't have return *line return*. This will fail
\`\`\`
    return <-- line return here is bad
        <div>This won't work</div>
\`\`\`

* Returning more then one element will also fail
\`\`\`
    return (
        <div>hi there!</div>
        <div>This won't work either</div>
        )
\`\`\`

`);     

export default slide;