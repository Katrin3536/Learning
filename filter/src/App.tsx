import React, {useState} from 'react';
import './App.css';
import NewComponent from './NewComponent';

export type FilterType = 'All' | 'Dollars' | 'RUBLS'

export type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter] = useState<FilterType>('All');


    let currentMoney = money;
    if (filter === 'RUBLS') {
        currentMoney = money.filter(filtredMoney => filtredMoney.banknots === 'RUBLS');
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter(filtredMoney => filtredMoney.banknots === 'Dollars');
    }

    const onCLickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    };

    return (
        <div className="App">
            <NewComponent currentItem={currentMoney} filterFunction={onCLickFilterHandler}/>
        </div>);

}

export default App;
