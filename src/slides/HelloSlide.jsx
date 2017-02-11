import React from 'react';
import ReactMarkdown from 'react-markdown';

const HelloSlide = () => {
    const body = `
# test

* point 1
* point 2

\`\`\`
are you code
\`\`\`
`;    
        return (
            <ReactMarkdown source={body} />
        )
    }   


export default HelloSlide;