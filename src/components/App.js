import React, {useState} from "react";
import Card from "./Card"

export default function App() {
    
    const [values,setValues] = useState(shuffle([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]));
    const [selected, setSelected] = useState([]);

    function remove(value) {
        setValues(values.filter((element) => (element!== value)))
    }

    function verifyGame() {
        if (selected[0] === selected[1]) {
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
    <div>
        {values.map(function (value, index) {
            return <Card key={index} value={value} fun={cardSelect}/>
        })
        }
    </div>
    )
}
