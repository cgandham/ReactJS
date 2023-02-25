import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { todos, url } from './Constants';

const Wrapper = styled.div`
  padding: 5px;
  background: papayawhip;

`; 

function TodoCard(props) {

    const [inputValue, setInputValue] = useState("");
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(0);
    const [userData, setUserData] = useState({});

    const getData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setUserData(json);
        console.log(json);
    };

    useEffect(() => {
        console.log('useEffect');
        getData();

    },[]);


    const changeInput = (event) => {
        setInputValue(event.target.value);
    };

        return(
            <Wrapper>
                <div>Todo's</div>
                <ul>
                    {
                    todos.map((t) => {
                        return <li key={t.id}>{t.name}</li>
                    })}
                </ul>
                <input type="text" value={inputValue} onChange={changeInput}/>
                <div>{inputValue}</div>
                <button onClick={() => setShow(!show)}>Click to toggle element below</button>
                {show && <div>Boo, Hi!</div>}
                <div>{props.parentValue}</div>
                <h2>Counter: {counter}</h2>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
                <button disabled={inputValue.length < 1}>Submit</button>
                

            </Wrapper>
        );
}

export default TodoCard;