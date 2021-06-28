import my_cover from '../images/edited-1054475.jpg'
import Image from 'react-bootstrap/Image'

function HomePage() {

    return (<div class="px-10 py-0 my-5 text-center">
        <div class="container py-4">
            <div class="align-items-center align-content-center">
                <Image src={my_cover} alt="Photo taken at North Point." fluid rounded/>
            </div>
        </div>

        <h1 class="display-5 fw-bold mt-4">Engineer, Rail Enthusiast, and Jaywalker.</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mt-4">
                Hello! I am a Electrical and Electronic Engineering undergraduate at Imperial College London, with attestable internship and volunteering experiences. I have developed a profound interest for trains, in particular the sophisticated rolling stock traction motors, and the intricate logistics involved in the industry's operation. I also enjoy "jaywalking" and documenting these experiences. Afterall, "the world is my oyster"!
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
                <button type="button" class="btn btn-outline-secondary btn- px-4 gap-3">About me</button>
            </div>
        </div>
    </div>);

}

export default HomePage;