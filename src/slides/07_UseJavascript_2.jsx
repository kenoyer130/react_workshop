import Slide from '../Slide';

const slide =  Slide (`
# Side Tangent (Rant?) - Don't mix your server and client code (API First)

* Razor is awesome! Don't use it.
* PHP/Asp Classic/JSP etc ties your client to your server tech
* **API First** seperate your server from your client.
    * Allows you to change your client or server over time without having to rewrite both
    * Or just throw the client away and repurpose the API
`);     

export default slide;