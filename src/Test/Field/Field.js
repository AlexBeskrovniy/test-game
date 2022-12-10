import './Field.css';

const Field = (props) => {
    const fieldInlineStyles = {
        width: `${props.width}`,
        height: `${props.height}`,
        top: `${props.coordY}`,
        left: `${props.coordX}`
    };
    const handleClick = (e) => {
        e.target.classList.toggle('active');
    }

    return(
        <div className="field" style={fieldInlineStyles} onClick={handleClick}>
            <div class="field-inner"></div>
        </div>
    );
}

export default Field;