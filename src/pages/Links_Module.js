function LinkModules() {

    return (
        <div class="row align-items-md-stretch mb-4">
            <div class="col-md-3 mt-4">
                <div class="h-100 p-5 text-white bg-dark rounded-3">
                    <h2>CV 📃</h2>
                    <p>
                        A PDF version of my CV is available below.
                        Alternatively, my experiences are also documented on LinkedIn.
                    </p>
                    <button class="btn btn-outline-light" type="button">CV PDF</button>
                </div>
            </div>
            <div class="col-md-3 mt-4">
                <div class="h-100 p-5 bg-light rounded-3">
                    <h2>GitHub 💻</h2>
                    <p>
                        Check out my repositories on GitHub!
                    </p>
                    <button class="btn btn-outline-secondary" type="button">GitHub</button>
                </div>
            </div>
            <div class="col-md-3 mt-4">
                <div class="h-100 p-5 rounded-3 text-light" style={{ backgroundColor: 'teal', }}>
                    <h2>Blogs ✏️</h2>
                    <p>
                        This is where I blog my jaywalking and train-spotting journeys. Have a read!
                    </p>
                    <button class="btn btn-outline-light" type="button">Medium</button>
                </div>
            </div>
            <div class="col-md-3 mt-4">
                <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>Email ✉️</h2>
                    <p>
                        Let's have a chat the traditional way!
                    </p>
                    <button class="btn btn-outline-secondary" type="button">Let's chat</button>
                </div>
            </div>
        </div>
    );

}

export default LinkModules;