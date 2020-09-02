import React from 'react';
import file from './cards.json';
import CardDateContainer from './cardDateContainer'
import '../css/style.css'

export default class SpoilerCardTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards : null,
            allCards : null,
            isLoaded : false,
            months : ["January", "February", "March", "April", "May", "June",
                 "July", "August", "September", "October", "November", "December"]
        };

    }

    componentDidMount() {
        var cards = file;
        var allCards = file;
        var isLoaded = true;

        this.setState({
            cards,
            allCards,
            isLoaded
        });
    }

    sortCards() {
        var cards = this.state.cards;
        cards.sort((a, b) => (a.date_released > b.date_released) ? 1 : -1)
    }

    buildCards() {
        this.sortCards();
        var cards = this.state.cards;

        var cardDateArray = [];
        var tempArray = [];
        var init_date = cards[0].date_released

        for (var i = 1; i < cards.length; i ++) {
            if (init_date !== cards[i].date_released || i === cards.length - 1) {
                init_date = cards[i].date_released;
                cardDateArray.push(tempArray);
                tempArray = [];
            } else {
                tempArray.push(cards[i])
            }
        }

        var tempCardArray = cardDateArray.map((data, key) => {
            var date = new Date(data[0].date_released);
            var month = date.getMonth();
            month = this.state.months[month]
            var day = date.getDate();
            var year = date.getFullYear();
            var dateString = month + ' ' + day + ', ' + year;
            return (
                <div>
                    <tr className = "SpoilerCardTable_tr_date_title">
                        <td>{dateString}</td>
                    </tr>
                    <tr>
                        <td className = "SpoilerCardTable_td">
                            <CardDateContainer cards = {data} />
                        </td>
                    </tr>
                </div>
            )
        });

        return tempCardArray;
    }


    render() {
        if (this.state.isLoaded) {
            return (
                <div className = "spoilerCardTable">
                    <table className = "spoilerCardTable_table">
                        <tbody >
                        {
                            this.buildCards()
                        }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div>
                    No Cards!
                </div>
            )
        }
    }
}