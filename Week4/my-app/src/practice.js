function Square({ value }) {
    function handleClick() {
        console.log("I'm doing something!!!");
    }

    return (
        <button 
            className="square"
            onClick={handleClick}
        >{value}</button>
    )
}

function Board() {
    return (
        <div>
            <div className="board-row">
                <Square value="1" />
                <Square value="2" />
                <Square value="3" />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}

function TicTacToe() {
    return (
        <Board />
    )
}

export default TicTacToe