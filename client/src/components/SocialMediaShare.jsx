import React, { Component } from "react";
import {Row, Col} from 'react-bootstrap';
// import {Container} from 'react-bootstrap';
import './SocialMediaShare.css'

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    RedditShareButton,
    EmailShareButton,
} from 'react-share';

import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    EmailIcon,
} from 'react-share';


class SocialMediaShare extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        return (
            <div className="d-flex justify-content-left">
                {/* <div className="row align-items-md-stretch align-items-center align-content-center">
                    <Col>
                        <FacebookShareButton
                            children={<FacebookIcon size={48} round={true} />}
                            url={`https://cluelesselectrostar.github.io/ytc-web/#${this.props.link}`}
                        />
                    </div>
                    <Col>
                        <TwitterShareButton
                            children={<TwitterIcon size={48} round={true} />}
                            url={`https://cluelesselectrostar.github.io/ytc-web/#${this.props.link}`}
                            className="col-md-2"
                        />
                    </div>
                    <Col>
                        <LinkedinShareButton
                            children={<LinkedinIcon size={48} round={true} />}
                            url={`https://cluelesselectrostar.github.io/ytc-web/#${this.props.link}`}
                            className="col-md-2"
                        />
                    </div>
                    <Col>
                        <PinterestShareButton
                            children={<PinterestIcon size={48} round={true} />}
                            url={`https://cluelesselectrostar.github.io/ytc-web/#${this.props.link}`}
                            className="col-md-2"
                        />
                    </div>
                    <Col>
                        <RedditShareButton
                            children={<RedditIcon size={48} round={true} />}
                            url={`https://cluelesselectrostar.github.io/ytc-web/#${this.props.link}`}
                            className="col-md-2"
                        />
                    </div>
                    <Col>
                        <EmailShareButton
                            children={<EmailIcon size={48} round={true} />}
                            url={`https://cluelesselectrostar.github.io/ytc-web/#${this.props.link}`}
                            className="col-md-2"
                        />
                    </div>
                </div> */}
                <Row>
                    <Col md={1} xs={2}>
                        <FacebookShareButton
                            children={<FacebookIcon size={48} round={true} className="sharebutton"/>}
                            url={`https://yannichau.github.io/ytc-web/#${this.props.link}`}
                        />
                    </Col>
                    <Col md={1} xs={2}>
                        <TwitterShareButton
                            children={<TwitterIcon size={48} round={true} className="sharebutton"/>}
                            url={`https://yannichau.github.io/ytc-web/#${this.props.link}`}
                            className="col-md-2"
                        />
                    </Col>
                    <Col md={1} xs={2}>
                        <LinkedinShareButton
                            children={<LinkedinIcon size={48} round={true} className="sharebutton"/>}
                            url={`https://yannichau.github.io/ytc-web/#${this.props.link}`}
                            className="col-md-2"
                        />
                    </Col>
                    <Col md={1} xs={2}>
                        <PinterestShareButton
                            children={<PinterestIcon size={48} round={true} className="sharebutton"/>}
                            url={`https://yannichau.github.io/ytc-web/#${this.props.link}`}
                            className="col-md-2"
                        />
                    </Col>
                    <Col md={1} xs={2}>
                        <RedditShareButton
                            children={<RedditIcon size={48} round={true} className="sharebutton"/>}
                            url={`https://yannichau.github.io/ytc-web/#${this.props.link}`}
                            className="col-md-2"
                        />
                    </Col>
                    <Col md={1} xs={2}>
                        <EmailShareButton
                            children={<EmailIcon size={48} round={true} className="sharebutton"/>}
                            url={`https://yannichau.github.io/ytc-web/#${this.props.link}`}
                            className="col-md-2"
                        />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default SocialMediaShare;