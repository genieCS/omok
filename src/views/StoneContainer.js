import React, { Component } from 'react';
import '../styles/StoneContainer.css';
import StoneSquare from './StoneSquare';

export default class StoneContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			board: this.initCoordinates(),
		};
	}

	initCoordinates() {
		const board = [];
		for (let row = 0; row < 19; row++) {
			board.push([]);
			board[row].push(new Array(19));
			for (let col = 0; col< 19; col++) {
				board[row][col] = { row, col };
			}
		}
		return board;
    }

	initBoard() {
		const { board } = this.state;
        const{ blackIsTurn, onClick } = this.props;

		return (board.map(row => row.map(col => (
            <StoneSquare
                key={ `${ col.row } ${ col.col }` }
                blackIsTurn={ blackIsTurn }
			    coordinate={ col }
			    onClick={ onClick }
			 />
		))));
	}

	render() {
		return (
			<div className={ `stone-container`} >
				{ this.initBoard() }
			</div>
		);
	}
}
