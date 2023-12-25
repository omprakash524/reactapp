import './App.css';
import Header1 from './component/Header';
import Main from './component/Main';
import Sidebar from './component/Sidebar';
import Component  from './component/PropComponent/Component';
import Simpleexpression from './component/PropComponent/SimpleExpression';
import PropsChildren from './component/PropComponent/PropsChildren/PropsChildren';
import FunctionComponent  from './component/PropComponent/PropsChildren/FunctionExpression';
import Bag1  from './component/PropComponent/PropsChildren/Bag';
import Btn  from './component/PropComponent/PropsChildren/Btn';
import Exp  from './component/PropComponent/PropsChildren/expressionAsProps';
import EventHandler  from './component/EventHandling';
import ModeToggler from './component/UserEvents/ModeToggler';


function Header(){
  return <h1>Hello i am groot</h1>;
}

function Heading(){
  return (
    <h1>This is an h1 headings. </h1>
  )
};


function App() {
  
  return (
    <div className="App">
      This is the starting code for "Your first component" 
      <Header/>
      <Heading/>

      <Header1 name="Groot" color="purple"/>
      <Main greet="omprakash props"/>
      <Sidebar greet="Sidebar greet hi"/>


      <Component first="i am first" second="i am second" third="i am third" fourth="why i am fucking peaky blinder"/>
      <Component first="i am om"/>

      <Simpleexpression/>
      <Simpleexpression/>

      <PropsChildren color="red" number="3" heading="head" promoSubHeding="I am promo sub heading"/>

      <FunctionComponent first="Home"/>
      <FunctionComponent first="I am Groot"/>
      <Bag1/>
      <Exp/>

      <Btn/>
      <br></br>

      <EventHandler/>

      <ModeToggler/>
    </div>
  );
};

export default App;
