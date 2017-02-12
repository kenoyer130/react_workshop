import Slide from '../Slide';

const slide =  Slide (`
# JSX
* Remember we are rethinking "best practices " (dogma)
* Seperation of Concern - "separation of concerns (SoC) is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern" - wikipedia
* If when you change A you must ALSO change B, you do not have a true Seperation of Concern.
* Simply having things in seperate files does not mean you have a Seperation. It just means you have to open an additional file every time you change something. 
* If when you change A you are *suprised* you had to change B, you have a violation of Seperation of Concern
* When you change your data you expect you have to also change your output template so they are not an actual seperation
* Only people who have not tried JSX complain about this. People who actually use it love it!
`);     

export default slide;