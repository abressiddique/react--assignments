import { useEffect, useState } from 'react';
import './styles.css';

function Square({ value, onClick }) {
    return <button onClick={onClick} className="square">{value}</button>;
}

export default function Tictactoe() {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];
            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x];
            }
        }
        return null;
    }

    function handleClick(index) {
        if (squares[index] !== '' || winner) return; // Prevent overwriting an occupied square or clicking after a winner is declared
        const newSquares = [...squares];
        newSquares[index] = isXTurn ? 'X' : 'O';
        setSquares(newSquares);
        setIsXTurn(!isXTurn);
    }

    useEffect(() => {
        const winner = getWinner(squares);
        if (winner) {
            setWinner(winner);
        }
    }, [squares]);

    return (
        <div className="tic-tac-toe-container">
            {winner ? <h2>Winner: {winner}</h2> : <h2>Next Player: {isXTurn ? 'X' : 'O'}</h2>}
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
        </div>
    );
}
