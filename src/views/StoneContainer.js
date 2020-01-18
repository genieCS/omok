import React, { useState } from 'react';
import '../styles/StoneContainer.css';
import StoneSquare from './StoneSquare';

export default function StoneContainer(props) {
	const { blackIsTurn, onClick } = props;

	return (
		<div className={ `stone-container`} >
			{ initBoard(blackIsTurn, onClick) }
		</div>
	);
}

function initBoard(blackIsTurn, onClick) {
	const board = initCoordinates();

	return (board.map(row => row.map(col => (
		<StoneSquare
			key={ `${ col.row } ${ col.col }` }
			blackIsTurn={ blackIsTurn }
			coordinate={ col }
			onClick={ onClick }
		 />
	))));
}

function initCoordinates() {
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