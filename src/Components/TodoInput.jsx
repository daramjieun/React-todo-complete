import { useState } from 'react';

const TodoInput = ({ onTodoAdd }) => {
    const [inputText, setInputText] = useState('')

    const handleInput = (event) => {
        const value = event.target.value;
        setInputText(value);
    }

    const handleClick = () => {
        onTodoAdd(inputText);
        setInputText('');
    }

    return (
        <div>
            <input type="text" value={inputText} onChange={handleInput} />
            <button onClick={handleClick}>추가</button>
        </div>
    )
}

export default TodoInput