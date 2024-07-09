import React, { useState } from 'react';
import './TicTacToe.css';
import Cross from '../assets/Cross.svg'
import Tick from '../assets/Tick.svg'

const initialBoard = Array(9).fill(null);

const TicTacToe = () => {

    const [board, setBoard] = useState(initialBoard);
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);

        checkWinner(newBoard);
    };

    const checkWinner = (currentBoard) => {
        const winLines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        for (let line of winLines) {
            const [a, b, c] = line;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                setWinner(currentBoard[a] === 'X' ? 'Player 1' : 'Player 2');
                return;
            }
        }

        if (currentBoard.every((square) => square !== null)) {
            setWinner('tie');
        }
    };

    const renderSquare = (index) => {
        return (
            <button className="square" onClick={() => handleClick(index)}>
                {board[index] === 'X' && <img src={Cross} alt="Cross"/>}
                {board[index] === 'O' && <img src={Tick} alt="Tick"/>}
            </button>
        );
    };

    const renderStatus = () => {
        if (winner) {
            if (winner === 'tie') {
                return 'It\'s a tie!';
            } else {
                return `Winner: ${winner}`;
            }
        } else {
            return `Next player: ${xIsNext ? 'Player 1' : 'Player 2'}`;
        }
    };

    const resetGame = () => {
        setBoard(initialBoard);
        setWinner(null);
        setXIsNext(true);
    };

    return (
        <div className="game">
            <div className="board">
                <div className="status">{renderStatus()}</div>
                <div className="board-row">
                    {renderSquare(0)}
                    
                    {renderSquare(1)}
                    
                    {renderSquare(2)}
                   
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    
                    {renderSquare(4)}
                   
                    {renderSquare(5)}
                  
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    
                    {renderSquare(7)}
                    
                    {renderSquare(8)}
                   
                </div>
            </div>
            <button className="reset-btn" onClick={resetGame}>RESET</button>
        </div>
    );
};

export default TicTacToe;
