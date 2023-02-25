import React, {useState} from 'react';
import styled from 'styled-components';

import TodoCard from '../Components/todo/TodoCard';

const Wrapper = styled.div`
  padding: 5px;
  background: papayawhip;
`; 

function TodoContainer (){

  const [value, setValue] = useState("Passed from Parent");
        return(
            <TodoCard parentValue={value} />
        )
}

export default TodoContainer;