import React from 'react';
import '../css/style.css'

export default class Cards extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards : this.props.cards,
            hasChanged : false
        }

        this.changeCard = this.changeCard.bind(this);
    }

    changeCard(data) {
        var cards = this.props.cards;
        var card = data;
        var newCard = card.leveled;
        var hasChanged = true;
        delete card.leveled;
        newCard["name"] = card["name"]
        newCard["leveled"] = card;
        
        cards = newCard;

        this.setState({
            cards,
            hasChanged
        });
    }

    render() {
        if (this.state.hasChanged) {
            return (
                <div className = "card_td">
                    <tr>
                        <td>
                            <img src = { 'https://clore-card-images.s3.amazonaws.com/cards/' + this.state.cards.url } alt = '' 
                                onClick = {() => this.changeCard(this.state.cards)} value = {this.state.cards} />
                        </td>
                    </tr>
                    <tr className = "card_tr_txt">
                        <td>{this.props.cards.name}</td>
                    </tr>
                </div>
            )
        } else {
            if ("leveled" in this.props.cards) {
                return (
                    <div className = "card_td">
                        <tr>
                            <td>
                                <img src = { 'https://clore-card-images.s3.amazonaws.com/cards/' + this.props.cards.url } alt = '' 
                                    onClick = {() => this.changeCard(this.props.cards)} value = {this.props.cards} />
                            </td>
                        </tr>
                        <tr className = "card_tr_txt">
                            <td>{this.props.cards.name}</td>
                        </tr>
                    </div>
                )
            } else {
                return (
                    <div className = "card_td">
                        <tr>
                            <td><img src = { 'https://clore-card-images.s3.amazonaws.com/cards/' + this.props.cards.url } alt = ''/></td>
                        </tr>
                        <tr className = "card_tr_txt">
                            <td>{this.props.cards.name}</td>
                        </tr>
                    </div>
                )
            }
        }  
    }
}