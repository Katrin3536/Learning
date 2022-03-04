import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
    // const MyFirstSubscriber = () => {
    //     console.log("Hello! Im Vasya!")
    // }
    //
    // const MySecondSubscriber = () => {
    //     console.log('Hello! Im Fedya!')
    // }
//      const foo1 = ()=> {
//          console.log("100200")
//      }
//      const foo2 = (num:string) => {
// console.log(num)
//      }
    const Button1Foo=(subscriber:string,age:number,adress:string)=>{
        console.log(subscriber,age,adress)
    }
    const Button2Foo =(subscriber:string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
      console.log("Simply Button")
    }
    return (

        <div className="App">
            {/*<button onClick={(event)=>console.log('Hello!')}>MyYouTubeChannel-1</button>*/}
            <Button name={'MyYouTubeChannel-1'} callBack={()=>Button1Foo('Vasya', 22, 'New York')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={()=>Button2Foo('Ivan')}/>
            <Button name={'SimplyButton'} callBack={Button3Foo}/>

            {/*   <button onClick={foo1}>1</button>*/}
            {/*  <button onClick={()=>foo2("100200")}>2</button>*/}

        </div>
    );
}

export default App;
