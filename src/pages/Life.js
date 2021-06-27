import Figure from 'react-bootstrap/Figure';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Image from 'react-bootstrap/Image';

import wales_image from '../images/wales.JPG';
import tibet_image from '../images/tibet.jpg';
import bakerloo_image from '../images/bakerlootutorial.png';

import './Life.css';

function LifePage() {

    return (<main>

        <div class="align-items-md-stretch h-100 p-5 mb-4 bg-light rounded-3">
            <div class="col-md-8">
                <h1 class="display-5 fw-bold">Living my passions ❤️‍🔥</h1>
                <p class="lead">
                    My life beyond engineering!
                </p>
            </div>
        </div>

        <div class="container py-4">
            <ParallaxProvider>
                <Parallax className="custom-class" x={[200, -200]} tagOuter="figure">
                    <Image src={bakerloo_image} height="300px"/>
                </Parallax>
            </ParallaxProvider>
        </div>

        <div class="container py-4">
            <div class="row align-items-md-stretch mb-4">
                <div class="h-100 p-5 text-white rounded-3" style={{ backgroundColor: 'teal', }}>
                    <div class="row align-items-center align-content-center">
                        <div class="col-md-7">

                            <h2>Training my mind to mind the trains 🚅</h2>
                            <p>
                                Trains have always been a huge part of my life. As a child I was attracted to Thomas & Friends, but jokes aside, many bits of a railway entice me, whether it be rolling stock design, the timetabling logistics, the sophisticated and evolving signalling systems, and so much more! Occasionally I seek solace in listening to motor noises from familiar rolling stock, though this probably isn't the best place to elaborate on such a niche interest.
                            </p>
                            <h5 class=" mt-4">Tibetan Railway</h5>
                            <p>
                                I think the most remarkable rail journey I have made is the 55-hour sleeper service from Guangzhou/ Canton (廣東廣州) to Tibet Lhasa (西藏拉薩). That was my first time I ever went on a sleeper service, let alone one of the world's (distance-wise) longest and (altitude-wise) highest service. It was amazing to witness the diverse landscapes and cityscapes scrolling past my eyes, but getting to interact with people from diverse backgrounds was a joy as well!
                            </p>
                            <h5 class=" mt-4">2019-2020 ICRTS Flagship - Welsh Highlands Heritage Railways Volunteering Trip</h5>
                            <p>
                                Given my age, I do not have a particular attachment to steam railways, but I have always looked forward to witnessing the grandeur of steam railways. Working alongside experienced veterans of the industry gave me new perspectives on the country's railways, and made my first encounter with steam locomotives an absolutely remarkable experience! As a volunteer, we gained hands-on engineering experience, such as track laying and installing electrical mains at the depot, which was laborious but ultimately rewarding.
                            </p>
                            <p>
                                There are so many more journeys I would like to make post-coronavirus, and I very much look forward to them. Meanwhile, have a read at my (hopefully decently written) blogs on medium!
                            </p>
                            <button class="btn btn-outline-light" type="button">Yanni Chau on Medium</button>
                        </div>
                        <div class="col-md-5">
                            <div class="mb-4">
                                <Figure>
                                    <Figure.Image
                                        src={wales_image}
                                        fluid rounded
                                    />
                                    <Figure.Caption class="text-light">
                                        All the boys posing with their dirty hands after a day of tracklaying! (Winter 2019, Ffestiniog and Welsh Highland Railways Volunteering Trip)
                                    </Figure.Caption>
                                </Figure>
                            </div>
                            <div class="mb-4">
                                <Figure>
                                    <Figure.Image
                                        src={tibet_image}
                                        fluid rounded
                                    />
                                    <Figure.Caption class="text-light">
                                        Aboard the 55-hour sleeper serivce to Lhasa! (Summer 2019, Graduation Trip with 7 classmates)
                                    </Figure.Caption>
                                </Figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row align-items-md-stretch mb-4">
                <div class="h-100 p-5 text-white rounded-3" style={{ backgroundColor: 'rgb(51,51,51)', }}>
                    <h2>Rolling with my feet 🛼</h2>
                    <p></p>
                </div>
            </div>


        </div>

    </main >);
}

export default LifePage;