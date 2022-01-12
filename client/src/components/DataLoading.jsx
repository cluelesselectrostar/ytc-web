import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';

export default function DataLoading() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <div class="row align-items-center justify-content-center ">
                <div class="col-md-6">
                    <Alert variant="danger" onClose={() => setShow(false)}>
                        <div class="row align-items-center align-content-center">
                            <div class="col-md-10">
                                <Alert.Heading>Data still loading......</Alert.Heading>
                                <p>
                                    Lots of bits and bytes pumping in! So come back in around 10 seconds or so, and the map and line graph will be ready for you.
                                </p>
                            </div>
                            <div class="col-md-2">
                                <Spinner animation="border" variant="danger" />
                            </div>
                        </div>
                    </Alert>
                </div>
            </div>
        );
    }
    return <Button variant="outline-danger" onClick={() => setShow(true)}>Show Alert</Button>;
}