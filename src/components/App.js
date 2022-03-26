import React, {useState, useEffect} from "react";
import Card from "./Card"
import '../styles/App.css'

export default function App() {
    
    const [values,setValues] = useState(shuffle([
        {value: 1,number: 1,selected: false,},
        {value: 1,number: 2,selected: false,},
        {value: 2,number: 1,selected: false,},
        {value: 2,number: 2,selected: false,},
        {value: 3,number: 1,selected: false,},
        {value: 3,number: 2,selected: false,},
        {value: 4,number: 1,selected: false,},
        {value: 4,number: 2,selected: false,},
        {value: 5,number: 1,selected: false,},
        {value: 5,number: 2,selected: false,},
        {value: 6,number: 1,selected: false,},
        {value: 6,number: 2,selected: false,},
        {value: 7,number: 1,selected: false,},
        {value: 7,number: 2,selected: false,},
        {value: 8,number: 1,selected: false,},
        {value: 8,number: 2,selected: false,},
        {value: 9,number: 1,selected: false,},
        {value: 9,number: 2,selected: false,},
        
    ]));

    const [counter,setCounter] = useState(0);

    const [selected, setSelected] = useState([]);

    function addCount() {
        setCounter(counter + 1);
    }

    function remove(card) {
        setValues(values.filter((element) => (element['value']!== card['value'])))
    }

    function verifyGame() {
        if (selected[0]['value'] === selected[1]['value'] 
        && selected[0]['number'] !== selected[1]['number']) {
            window.setTimeout(() => remove(selected[0]),500)
            window.setTimeout(() => remove(selected[1]),500)
        }
        setSelected([])
        window.setTimeout(() => cardDeselect(),1000)
        
    }

    function cardSelect(card) {
        updateCard({value: card.value, number: card.number, selected: !card.selected})
        selected.push({value: card.value, number: card.number, selected: !card.selected})
        selected.length===2? verifyGame(): null;
    }

    function updateCard(newCard) {
        setValues(values => values.map(
            (value,i) => value.value === newCard.value && value.number === newCard.number? 
            newCard:value))
    }

    function cardDeselect() {
        setValues(values => values.map(
            (element) => ({value: element.value, number: element.number, selected: false})))
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
      }

    return (
        <div>
            <div className="title">
                <h1 className="textTitle">Memoria</h1>
                <h5 className="textTitle">Contador de Clicks: {counter}</h5>
            </div>
            <div className="container">
                {values.map(function (value, index) {
                    return <Card key={index} card={value} fun={cardSelect} counter={addCount} selected={selected}/>
                })
                }
            </div>
            {
                values.length === 0? <h1 className="textTitle">Juego Completado</h1> : <></>
            }

        </div>
    )
}
