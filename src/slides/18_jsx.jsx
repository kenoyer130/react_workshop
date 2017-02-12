import Slide from '../Slide';

const slide =  Slide (`
# JSX
* "JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant."
* JSX allows you to write HTML in your React Component
* JSX is optional but everyone who skipped it said next project they were using it

*sample and quote from http://buildwithreact.com/tutorial/jsx*

* JSX - mixes React components and HTML
\`\`\`
<DashboardUnit data-index="2">
  <h1>Scores</h1>
  <Scoreboard className="results" />
</DashboardUnit>

\`\`\`

* Becomes this output
\`\`\`
React.createElement(
  DashboardUnit,
  { "data-index": "2" },
  React.createElement(
    "h1",
    null,
    "Scores"
  ),
  React.createElement(Scoreboard, { className: "results" })
);
\`\`\`

`);     

export default slide;