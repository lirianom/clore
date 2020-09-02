import React from 'react';
import file from './cards.json';
import Cards from './cards';
import '../css/style.css'

export default class CardTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards : null,
            allCards : null,
            isLoaded : false,
            keys : null,
            sortedForward : true,
            searchWord : '',
        };

        this.sortNames = this.sortNames.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.keyDown = this.keyDown.bind(this);
        this.sortCardSets = this.sortCardSets.bind(this);
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

    sortNames(event) {
        var cards = this.state.cards;
        var sortedForward = this.state.sortedForward;

        if (event.target.value === 'name') {
            if (!sortedForward) {
                cards.sort((a, b) => (a.name > b.name) ? 1 : -1)
                sortedForward = true;
            } else {
                cards.sort((a, b) => (a.name < b.name) ? 1 : -1)
                sortedForward = false;
            }
        } else if (event.target.value === 'type') {
            if (!sortedForward) {
                cards.sort((a, b) => (a.type > b.type) ? 1 : -1)
                sortedForward = true;
            } else {
                cards.sort((a, b) => (a.type < b.type) ? 1 : -1)
                sortedForward = false;
            }
        } else if (event.target.value === 'date') {
            if (!sortedForward) {
                cards.sort((a, b) => (a.date_released > b.date_released) ? 1 : -1)
                sortedForward = true;
            } else {
                cards.sort((a, b) => (a.date_released < b.date_released) ? 1 : -1)
                sortedForward = false;
            }
        }

        this.setState({
            cards,
            sortedForward,
        })
    }

    handleChange(event) {

        var subCards = null;

        var regex = RegExp('^' + event.target.value + '.*');

        if (event.target.name === "name") {
            subCards = this.state.cards.filter(card => regex.test(card.name));
        } else if (event.target.name === "type") {
            subCards = this.state.cards.filter(card => regex.test(card.type));
        }

        this.setState(() => {
            return {
                cards : subCards,
            };
        }, this.forceUpdate());
    }

    keyDown(event) {

        if (event.keyCode === 8) { 

            var subCards = null;
            var searchString = event.target.value.slice(0, -1);

            var regex = RegExp('^' + searchString + '.*');
            console.log(regex)

            if (event.target.name === "name") {
                subCards = this.state.allCards.filter(card => regex.test(card.name));
            } else if (event.target.name === "type") {
                subCards = this.state.allCards.filter(card => regex.test(card.type));
            }

            this.setState(() => {
                return {
                    cards : subCards,
                };
            }, this.forceUpdate());
        }
    }

    buildCards() {
        var newCardComponentArray = []
        var row = []
        var oldCardComponentArray = this.state.cards.map((data, key) => {

            return(
                <td className = "cardTable_td">
                    <Cards cards = {data} />
                </td>
            )
        })


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


    sortCardSets(set) {

        var subCards = null;

        subCards = this.state.cards.filter(card => card.set === set);

        this.setState(() => {
            return {
                cards : subCards,
            };
        }, this.forceUpdate());
    }


    render() {
        if (this.state.isLoaded) {
            return (
                <div className = "cardTable">
                    <div className = "cardTable_filter_container">
                        Card Name : <input type = "text" name = "name" value = {this.state.value} onChange = {this.handleChange} onKeyDown = {this.keyDown} />
                        <br />
                        Card Type : <input type = "text" name = "type" value = {this.state.value} onChange = {this.handleChange} onKeyDown = {this.keyDown} />
                        <div className = "cardTable_filter">
                            <button onClick = {this.sortNames} type = 'button' value = 'name'>Name</button>
                            <button onClick = {this.sortNames} type = 'button' value = 'type'>Type</button>
                            <button onClick = {this.sortNames} type = 'button' value = 'date'>Release Date</button>
                        </div>
                        <div className = "cardTable_sets">
                            <img src = { 'https://clore-card-images.s3.amazonaws.com/sets/foundations.png' } 
                                className = "setImage" alt = "" onClick = {() => this.sortCardSets(471)} />
                        </div>
                    </div>
                    <table className = "cardTable_table">
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