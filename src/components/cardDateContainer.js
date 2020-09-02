import React from 'react';
import Cards from './cards';
import '../css/style.css'

export default class CardTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards : this.props.cards,
        };
    }

    buildCards() {
        var newCardComponentArray = []
        var row = []

        var oldCardComponentArray = this.props.cards.map((data, key) => {
            return(
                <td className = "cardTable_td">
                    <Cards cards = {data} />
                </td>
            )
        });


        for (var i = 0, j = 1; i < oldCardComponentArray.length; j ++, i ++) {
            row.push(oldCardComponentArray[i])
            if (j === 5 || oldCardComponentArray[i + 1] == null) {
                newCardComponentArray.push(
                    <tr>
                        {row}
                    </tr>
                )
                j = 0
                row = []
            }
        }

        return newCardComponentArray
    }


    render() {
        return (
            <table className = "cardTable_table">
                <tbody >
                {
                    this.buildCards()
                }
                </tbody>
            </table>
        )
    }
}