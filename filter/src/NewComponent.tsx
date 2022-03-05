import React from 'react';
import {FilterType, MoneyType} from './App';


type NewComponentProps = {
    currentItem: Array<MoneyType>;
    filterFunction: (currency: FilterType) => void;
}


const NewComponent = (props: NewComponentProps) => {
    return (
        <div>
            <ul>
                {props.currentItem.map((moneyItem, index) => {
                    return (<li key={index}>
                        <span>{moneyItem.banknots}</span>
                        <span>{moneyItem.value}</span>
                        <span>{moneyItem.number}</span>
                    </li>);
                })}
            </ul>

            <div style={{marginLeft: '35px'}}>
                <button onClick={() => {
                    props.filterFunction('All');
                }}>All
                </button>
                <button onClick={() => {
                    props.filterFunction('RUBLS');
                }}>Ruble
                </button>
                <button onClick={() => {
                    props.filterFunction('Dollars');
                }}>Dollar
                </button>
            </div>
        </div>
    );
};

export default NewComponent;

// <button onClick={()=>onCLickFilterHandler("RUBLS")}>Ruble</button>
// <button onClick={()=>onCLickFilterHandler('Dollars')}>Dollar</button>