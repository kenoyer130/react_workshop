import Slide from '../Slide';

const slide =  Slide (`
# Attaching your root component to the dom
* In the index.js your component tree is attached to the actual DOM

\`\`\`
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

----------------
<html>
<body>
    <div id="root"></div>
</body>
</hml>
\`\`\`

`);     

export default slide;