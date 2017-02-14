import Slide from '../Slide';

const slide =  Slide (`
# React Components and PropTypes
* Well thought out and commented PropTypes are your component public api
* React scales well since when a developer runs into a new component they can just scan the prop types as a starting point
* Forces you to think about what PropTypes your component needs
* If your component seems to need a lot of prop types that are unrelated, most likely you need to break it apart
* "You can't fix stupid" - No library can overcome a bad programmer who refuses to use its features

\`\`\`
// random example from https://github.com/callemall/material-ui/blob/master/src/Card/CardText.js

class CardText extends Component {

  static propTypes = {
    /**
     * If true, a click on this card component expands the card.
     */
    actAsExpander: PropTypes.bool,
    /**
     * Can be used to render elements inside the Card Text.
     */
    children: PropTypes.node,
    /**
     * Override the CardText color.
     */
    color: PropTypes.string,
    /**
     * If true, this card component is expandable.
     */
    expandable: PropTypes.bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

\`\`\`

`);     

export default slide;