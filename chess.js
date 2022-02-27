function Square(props) {
    return React.createElement("button", 
    { className: "square",
    onClick: props.onClick}, 
    props.value);
}

class Board extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        squares: Array(64).fill(null),
    };
    }

    /*handleClick(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
        return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext
    });
    }*/

    renderSquare(i) {
    return React.createElement(Square, {
        value: this.state.squares[i],
        onClick: () => this.handleClick(i)
    });
    }

    render() {
    /*const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }*/

    return React.createElement("div", null, React.createElement("div", {
        className: "status"
    }, status), this.createRow());
    }

    createRow(){
        for (let k = 0; k < 8; k++) {
            for (let i = 0; i < 64; i++) {
                React.createElement("div", { className: "board-row"}, this.renderSquare(i), this.renderSquare(i+1), this.renderSquare(i+2));
                i = i+3;
            }
        }
    }
}

class Game extends React.Component {
    render() {
    return React.createElement("div", {
        className: "game"
    }, React.createElement("div", {
        className: "game-board"
    }, React.createElement(Board, null)), React.createElement("div", {
        className: "game-info"
    }, React.createElement("div", null), React.createElement("ol", null))); }

}

ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));