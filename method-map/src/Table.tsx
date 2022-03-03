import React from 'react';

type TablePropsType = {
    arr: Array<DataType>
}
type DataType = {
    manufacturer: string;
    model: string;
}

const Table = (props: TablePropsType) => {

    return (
        <table>
            <thead>
            <tr>
                {props.arr.map((DataTypeObj, index) => {
                    return (<th key={index}>{index+1}</th>);
                })}
            </tr>
            </thead>
            <tbody>
            <tr>
                {props.arr.map((DataTypeObj, index) => {
                    return (<td key={index}>{DataTypeObj.manufacturer}</td>);
                })}
            </tr>
            <tr>
                {props.arr.map((DataTypeObj, index) => {
                    return (<td key={index}>{DataTypeObj.model}</td>);
                })}
            </tr>
            </tbody>
        </table>
    );
};

export default Table;