import React, {useState} from "react";
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
    const [selected, setSelected] = useState([]);

    function remove(card) {
        setValues(values.filter((element) => (element['value']!== card['value'])))
    }

    function verifyGame() {
        if (selected[0]['value'] === selected[1]['value'] 
        && selected[0]['number'] !== selected[1]['number']) {
            remove(selected[0])
            remove(selected[1])
        }
        console.log(selected);
        setSelected([])
    }

    function cardSelect(value) {
        selected.push(value)
        selected.length===2? verifyGame(): null;
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
    <div className="container">
        {values.map(function (value, index) {
            return <Card key={index} card={value} fun={cardSelect}/>
        })
        }
    </div>
    )
}
