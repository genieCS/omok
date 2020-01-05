import React, { Component } from 'react';
import '../styles/StoneSquare.css';
import { White, Black } from './GoStone';

export default class StoneSquare extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stone: null,
        }
        this.setStone = this.setStone.bind(this);
    }

    setStone(e) {
        e.preventDefault();

        const { blackIsTurn, coordinate, onClick } = this.props;
        const { row, col } = coordinate;

        this.setState({ stone: blackIsTurn ? <Black /> : <White /> });
        onClick(row, col);
    }

    render() {
        const { stone } = this.state;

        return (
            <div className='stone-square'
                onClick={ this.setStone }>
                { stone }
            </div>
        );
    }
}
