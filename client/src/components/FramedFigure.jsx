import Figure from 'react-bootstrap/Figure'
import React, { Component } from "react";

class FramedFigure extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        return (
            <div class="h-100 p-2 bg-white border rounded-3 align-content-center align-items-center">
                <Figure>
                    <Figure.Image
                        src={this.props.image}
                        fluid rounded
                    />
                    <Figure.Caption>
                        {this.props.caption}
                    </Figure.Caption>
                </Figure>
            </div>
        );
    }

}

export default FramedFigure;