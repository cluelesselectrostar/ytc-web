import './BouncyArrow.css';
import Button from 'react-bootstrap/Button';

// https://codepen.io/bisaillonyannick/pen/pvZeGg
export default function BouncyArrow() {
    return (
        <div class="arrow bounce" style={{margin: "25px", left: "1%" }} >
            <Button variant="secondary">
                <i className="bi bi-chevron-down" style={{ fontSize: "1.5em" }}></i>
            </Button>
        </div>
    )
}