export const Field = (props) => {
    const fieldStyle = {
        position: 'absolute',
        top: `${props.y}`,
        left: `${props.x}`
    }

    const handleClick = (e) => {
        e.target.dataset.open = true;
        e.target.querySelector('.icon').classList.add('icon-active');
    }
    
    return(
        <div onClick={handleClick} className="field" style={fieldStyle} data-click={props.isClicked} data-open={props.isOpened}>
            <span className="icon">{props.icon}</span>
        </div>
    );
}