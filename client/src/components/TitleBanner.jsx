
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
// import FadeIn from "react-lazyload-fadein";
// import { Image } from 'react-image-and-background-image-fade';

class TitleBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        if (this.props.variant === "light") {
            return (
                <div className="container mt-3 col-md-10">
                    <Card className="bg-light text-dark align-items-center" style={{ height: 350 }}>
                        {this.props.image ?
                            (
                                <Card.Img src={this.props.image} style={{ width: "100%", height: 350, maxHeight: 500, overflow: "hidden", objectFit: "cover", opacity: "30%" }} />)
                            : (
                                <div></div>
                            )
                        }
                        <Card.ImgOverlay>
                            <div class="card-img-overlay p-5 row align-items-center">
                                <div>
                                    <h5 class="display-4 fw-bold">{this.props.title}</h5>
                                    <p class="lead mt-4 fw-bold">{this.props.description}</p>
                                </div>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            );
        } else {
            return (
                <div className="container mt-3 col-md-10">
                    <Card className="bg-dark text-white align-items-center" style={{ height: 350 }}>
                        {this.props.image ?
                            (
                                <Card.Img src={this.props.image} style={{ width: "100%", height: 350, maxHeight: 500, overflow: "hidden", objectFit: "cover", opacity: "50%" }} />)
                            : (
                                <div></div>
                            )
                        }
                        <Card.ImgOverlay>
                            <div class="card-img-overlay p-5 row align-items-center">
                                <div>
                                    <h5 class="display-4 fw-bold">{this.props.title}</h5>
                                    <p class="lead mt-4">{this.props.description}</p>
                                </div>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            );
        }
    }

}

export default TitleBanner;