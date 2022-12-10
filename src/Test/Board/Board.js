import { useState } from 'react';
import './Board.css';
import Field from '../Field/Field';
import img from '../../fallout.jpg';

const Board = () => {
    const fields = [];

    const X = 10;
    const Y = 5;
    const fieldWidth = 100 / X;
    const fieldHeight = 100 / Y;
    let index = 0;
    for(let y = 0; y < 100; y += fieldHeight) {
        for(let x = 0; x < 100; x += fieldWidth) {
            const field = <Field
                            key={index}
                            width={`${fieldWidth}%`}
                            height={`${fieldHeight}%`}
                            coordY={`${y}%`} 
                            coordX={`${x}%`}
                        />
            fields.push(field);
            index++;
        }
    }

    console.log(fields);

    return(
        <div className="board">
            <img className='board-img' src={img} alt="cover" />
            {fields.map(field => field)}
        </div>
    );
}

export default Board;