import React, { useState } from 'react';

const InputValueState = () => {
    const [text, setText] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    return (
        <div>
            <h3>이름 임력</h3>
            <input type="text" onChange={handleInputChange}></input>
            <p>입력된 글자 : {text}</p>
        </div>
    );
};

export default InputValueState;