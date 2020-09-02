import React from 'react';
import CardTable from './cardTable';
import SpoilerCardTable from './spoilerCardTable';
import '../css/style.css'

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page : 0,
        }

        this.changePage = this.changePage.bind(this);
    }

    getPage() {
        console.log(this.state.page);
        if (this.state.page === 0) {
            return (
                <CardTable />
            )
        } else if (this.state.page === 1) {
            return (
                <SpoilerCardTable />
            );
        }
    }

    changePage(event) {
        var page = parseInt(event.target.value);
        this.setState({
            page,
        });
    }

    render() {
        return(
            <div>
                <p id = 'homeTitle'>Legends of Runeterra Cards</p>
                <div className = "page_filter">
                    <button onClick = {this.changePage} type = 'button' value = {0}>All Cards</button>
                    <button onClick = {this.changePage} type = 'button' value = {1}>Newest Cards</button>
                </div>
                {this.getPage()}
            </div>
        )
    }
}