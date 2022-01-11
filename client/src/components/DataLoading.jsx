import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function DataLoading() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <div class="row align-items-center justify-content-center ">
                <div class="col-md-6">
                    <Alert variant="danger" onClose={() => setShow(false)}>
                        <Alert.Heading>Data still loading......</Alert.Heading>
                        <p>
                            This might take up to 20 seconds. Lots of bits and bytes pumping in!
                        </p>
                    </Alert>
                </div>
            </div>
        );
    }
    return <Button variant="outline-danger" onClick={() => setShow(true)}>Show Alert</Button>;
}