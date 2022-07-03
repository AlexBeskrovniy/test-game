import { Field } from './Field';
import { Icons } from './Icons';

export function Canvas() {
    const width = 800;
    const heigth = 600;
    const FIELDS = [];
    let index = 0;

    for (let y = 0; y < heigth; y+=100) {
        for (let x = 0; x < width; x+=80) {
            const field = <Field
                                key={index}
                                icon={Icons[Math.floor(Math.random() * Icons.length)]}
                                y={`${y}px`}
                                x={`${x}px`}
                                isClicked={false}
                                isOpened={false}
                            />;
            FIELDS.push(field);
            index++;
        }
    }

    return (
        <div className="wrapper">
            <canvas id="gameBoard" width="800" height="600"></canvas>
            {
                FIELDS.map(field => {return field})
            }
        </div>
    );
}