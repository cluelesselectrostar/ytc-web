import Card from 'react-bootstrap/Card';
// import { Image } from 'react-image-and-background-image-fade';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import scrollToTop from './ScrollToTop';
import FadeIn from "react-lazyload-fadein";

function ProjectPostCard({ post }) {
    return (
        <FadeIn height={300} offset={700}>
            {onload => (
                <Card onLoad={onload} style={{height:550}}>
                    <Card.Img variant="top" src={(post.image)} style={{ width: "100%", height: 250, maxHeight: 250, overflow: "hidden", objectFit: "cover" }} />
                    <Card.Body>
                        <Card.Title><h3>{post.title}</h3></Card.Title>
                        <Card.Text style={{ textOverflow: "ellipsis" }}>
                            <p>{post.description}</p>
                        </Card.Text>
                        <ButtonGroup size="sm" className="mb-2">
                        <Button href={post.repo} variant="outline-secondary">Repo</Button>
                            <Button href={post.report} variant="outline-secondary">Repository</Button>
                        </ButtonGroup>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Published on {post.date}</small>
                    </Card.Footer>
                </Card>
            )}
        </FadeIn>
    )
}

export default ProjectPostCard;