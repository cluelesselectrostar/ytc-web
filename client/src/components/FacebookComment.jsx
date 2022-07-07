import React from 'react';
import SquircleBox from '../components/SquircleBox';

import Figure from 'react-bootstrap/Figure';
import Collapsible from 'react-collapsible';

import { FacebookProvider, Like, Comments } from 'react-facebook';

export default function FaceBookComment({ url }) {

    return (
        <div className="container col-md-10 col-lg-8 mt-3 mb-3">
            <hr />
            <br></br>
            <h3 className="display-3">CLS!</h3>
            <p>Plugin implemented with thanks to the convenient react-facebook package created by Zlatko Fedor.</p>

            <br></br>
            <FacebookProvider appId="215081200832412">
                <Like href={url} colorScheme="dark" showFaces share />
                <center>
                    <Comments href={url} width="100%" />
                </center>
            </FacebookProvider>

            <br></br>

            <SquircleBox
                appearance="bordered-grey"
                content={
                    <Collapsible
                        trigger={
                            <div className="row justify-content-between">
                                <div className="col-md-11 col-xs-10">Can't seem to view the Facebook comments plugin?</div>
                                <div className="col-md-1 col-xs-2">⬇️</div>
                            </div>
                        }
                        triggerStyle={{ fontSize: 20, fontWeight: "bold" }}
                        triggerWhenOpen={
                            <div className="row justify-content-between">
                                <div className="col-md-11 col-xs-8">Can't seem to view the Facebook comments plugin?</div>
                                <div className="col-md-1 col-xs-4">⬆️</div>
                            </div>
                        }
                    >
                        <p className="mt-4">This comment/ like/ share plugin is, by default, only enabled on Chrome (how unsurprising), if you're logged in to Facebook.
                            Unfortunately for other browsers (Firefox, Safari, Edge) you will have to enable cross-site tracking to let Zuckerberg spy on you.
                            This is accessible on the upper left corner next to the address bar.</p>
                        <p>Safari users, I have given up. Or precisely, Zuckerberg and Tim Apple has given up on you :(</p>
                        <div className="container py-4 align-content-center">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-6">
                                    <Figure>
                                        <Figure.Image
                                            src="https://raw.githubusercontent.com/cluelesselectrostar/ytc-web/master/images/chrome_tracking.png"
                                            fluid rounded
                                        />
                                        <Figure.Caption>
                                            Disable tracking prevention on Microsoft Edge
                                        </Figure.Caption>
                                    </Figure>
                                </div>
                                <div className="col-md-6">
                                    <Figure>
                                        <Figure.Image
                                            src="https://raw.githubusercontent.com/cluelesselectrostar/ytc-web/master/images/firefox_tracking.png"
                                            fluid rounded
                                        />
                                        <Figure.Caption>
                                            Disable tracking prevention on Firefox
                                        </Figure.Caption>
                                    </Figure>
                                </div>
                            </div>
                        </div>
                    </Collapsible>
                }
            />
        </div>
    );
}
