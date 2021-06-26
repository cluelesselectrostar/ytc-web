import Image from 'react-bootstrap/Image';

import wales_image from '../images/wales.JPEG';

function LifePage() {
    return (<main>
        <header class="pb-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                <span class="fs-4">Jumbotron example</span>
            </a>
        </header>


        <div class="align-items-md-stretch h-100 p-5 mb-4 bg-light rounded-3">
            <div class="row">
                <div class="col-md-8">
                    <h1 class="display-5 fw-bold">Living my passions!</h1>
                    <p class="lead">
                        Just a bit more about me!
                    </p>
                </div>
                <div class="col-md-4 align-content-center align-items-center">
                    <Image src={wales_image} alt="Ffestiniog and Welsh Heritage Railway." fluid rounded />
                </div>
            </div>
        </div>

        <div class="container py-4">
            <div class="row align-items-md-stretch mb-4">
                <div class="h-100 p-5 text-white rounded-3" style={{ backgroundColor: 'teal', }}>
                    <h2>Training my mind to mind the trains 🚅</h2>
                    <p>
                        Trains have always been a huge part of my life. As a child I was attracted to Thomas & Friends, but I doubt it is the key reason I became a rail enthusiast. Many bits of a railway entice me, whether it be rolling stock design, the logistics involved in timetabling, the sophisticated and continuously evolving signalling systems, or so much more! Occasionally I seek solace in listening to motor noises from familiar rolling stock, though I guess this probably isn't the best place to elaborate on such a niche interest.
                    </p>
                    <p>
                        I think the most remarkable rail journey I have made is the 55-hour sleeper service from Guangzhou/ Canton (廣東廣州) to Tibet Lhasa (西藏拉薩). That was my first time I ever went on a sleeper service, let alone one of the world's (distance-wise) longest and (altitude-wise) highest service. It was amazing to witness the diverse landscapes and cityscapes scrolling past my eyes, but getting to interact with people from diverse backgrounds was a joy as well!
                    </p>
                    <p>
                        Other journey (or I should say experience) worth mentioning is my 2019 Welsh and Ffestiniog Highlands Heritage Railways tour, an ICRTS flagship event. Given my age, I do not have a particular attachment to steam railways, but I have always looked forward to witnessing the grandeur of steam railways. Connecting with and working alongside experienced veterans of the industry gave me new perspectives on the country's railway and its history, and made my first encounter with steam locomotives an absolutely remarkable experience! As a volunteer, we gained hands-on engineering experience, such as track laying and installing electrical mains at the depot, which was laborious but ultimately rewarding.
                    </p>
                    <p>
                        There are so many more journeys I would like to make post-coronavirus, and I very much look forward to them. Meanwhile, have a read at my (hopefully decently written) blogs on medium!
                    </p>
                    <button class="btn btn-outline-light" type="button">Yanni Chau on Medium</button>
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