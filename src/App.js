import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import FunctionClick from './Components/FunctionClick';
import Check from './Components/Check';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind'
import Parent from './Components/Parent';
import UserGreet from './Components/UserGreet';
import ListRender from './Components/ListRender';
import LifecycleA from './Components/LifecycleA';
import Fragment from './Components/Fragment';
import Table from './Components/Table';
import Parentcomp from './Components/Parentcomp';
import Refsdemo from './Refsdemo';
import FocusP from './Components/FocusP';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import Error from './Components/Error';
import Counter from './Components/Counter';
import Hover from './Components/Hover';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name='Yash' className='Smarty' />
        <Welcome name='Reactjs' className='via codevolution'/>  */}
        {/* <Check/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <Parent/> */}
        {/* <UserGreet/> */}
        {/* <ListRender/> */}
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* <Fragment/> */}
        {/* <Table/> */}
        {/* <Parentcomp/> */}
        {/* <Refsdemo/> */}
        {/* <FocusP /> */}
        {/* <PortalDemo /> */}
        {/* <Error>
          <Hero heroname="Batman" /></Error>
        <Error>
          <Hero heroname="Superman" />
        </Error>
        <Error>
          <Hero heroname="jokey" />
        </Error>*/}
        {/* <Counter/> */}
        <Counter name='Yash' />
        <Hover name ='Yash'/>
      </div>
    );
  }
}
export default App;