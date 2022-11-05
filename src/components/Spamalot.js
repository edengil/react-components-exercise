import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render(){
        const items = [];
        for (var i = 0; i < 500; i++) {
            items.push(
                <div> <Spam/>
                </div>
            );
        }
        return items
    }

}

export default Spamalot

