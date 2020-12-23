import React from 'react';
import '../css/style.css'

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imageShown : 0
        }
        
        this.cardInput = this.cardInput.bind(this);
        this.submitCard = this.submitCard.bind(this);
    }

    cardInput() {

    }

    submitCard() {
        
    }

    render() {
        if (imageShown === 0) {
            return(
                <div>
                    <form onSubmit = {this.submitCard}>
                        Name : <input type= 'text' name= 'name' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Type : <input type= 'text' name= 'type' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Cost : <input type= 'text' name= 'name' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Keywords : <input type= 'text' name= 'keywords' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Rarity : <input type= 'text' name= 'rarity' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Set : <input type= 'text' name= 'set' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Region : <input type= 'text' name= 'region' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Date Released : <input type= 'text' name= 'date_released' value = {this.state.value} onChange = {this.cardInput} /> <br /> <br />
                        Image : <input type= 'text' name= 'image' value = {this.state.value} onChange = {this.cardInput} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
        } else if (imageShown === 1) {
            return(
                <div>
                    <form onSubmit = {this.submitCard}>
                        Name : <input type= 'text' name= 'name' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Type : <input type= 'text' name= 'type' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Cost : <input type= 'text' name= 'name' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Keywords : <input type= 'text' name= 'keywords' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Rarity : <input type= 'text' name= 'rarity' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Set : <input type= 'text' name= 'set' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Region : <input type= 'text' name= 'region' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        Date Released : <input type= 'text' name= 'date_released' value = {this.state.value} onChange = {this.cardInput} /> <br />
                        <img src = { this.state.cardData } alt = ''/> <br />
                        Image : <input type= 'text' name= 'image' value = {this.state.value} onChange = {this.cardInput} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )

        }
    }
}