import Card from 'react-bootstrap/Card';
import { Image } from 'react-image-and-background-image-fade';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import scrollToTop from './ScrollToTop';

function BlogCard({post, isLocal}) {
    return (
        < Card >
            <Card.Img variant="top" src={(post.image)} style={{ width: "100%" }} />
            <Card.Body>
                <Card.Title><h3>{post.title}</h3></Card.Title>
                <Card.Text>
                    <p>{post.description}</p>
                </Card.Text>
                {post.markdown === "" ?
                    (
                        <ButtonGroup size="sm" className="mb-2">
                            <Button variant="outline-secondary" href={post.link}>Medium</Button>
                        </ButtonGroup>
                    ) : (
                        <ButtonGroup size="sm" className="mb-2">
                            <Button variant="outline-secondary">
                            {isLocal ? (
                                <Link to={`/blogs/static/${post.title}/${post.read}`} onClick={scrollToTop} className="text-decoration-none text-secondary"> Read </Link>
                            ):(
                                <Link to={`/blogs/mogodB/${post.title}/${post._id}`} onClick={scrollToTop} className="text-decoration-none text-secondary"> Read </Link>
                            )}
                            </Button>
                            <Button href={post.link} variant="outline-secondary">Medium</Button>
                        </ButtonGroup>
                    )
                }
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Published on {post.date}</small>
            </Card.Footer>
        </Card >
    )
}

export default BlogCard;