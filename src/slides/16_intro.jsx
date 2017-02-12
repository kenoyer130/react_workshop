import Slide from '../Slide';

const slide =  Slide (`
# React Components
* Much like the Browser DOM, these components form a tree
* There must be a root Component

*attempt at a tree in markdown with mixed results...*

. RootComponent

+-- ComponentA

+-- ComponentB

|   +-- ComponentC

|   +-- ComponentD

+-- ComponentE

|   +-- ComponentF

`);     

export default slide;