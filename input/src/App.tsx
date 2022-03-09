import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';
import Button from './components/Button';
import Input from './components/Input';

function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);
    let [title, setTitle] = useState('');


    const addMessage = (title: string) => {
      let newMessage ={message: title}
        setMessage([newMessage, ...message])

    }
 const callBackButton = () => {
     addMessage(title);
     setTitle('')
 }


    return (
        <div className="App">
            <Button name = {"+"} callBack={callBackButton}/>
            <Input setTitle = {setTitle} title = {title}/>
            {/*<FullInput addMessage = {addMessage}/>*/}
            {message.map((el, index) => <div key={index}>{el.message}</div>)

            }
        </div>
    );
}

export default App;
