const Button = ({ clickButton, colorRandom }) => {
    return (
        <button className='quoteBox__btn'
            style={{ background: colorRandom }}
            onClick={clickButton}> <span>»</span> </button>)
}

export default Button
