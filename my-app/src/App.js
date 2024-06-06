import React from "react";
import "./App.css";
 
function App() {
    return (
        <div>
            <nav className="navbar background">
                {/* <div>left</div>
                <div>right</div> */}
                <ul className="nav-list">
                    <div className="image">
                        <img src="./moon.jpg"></img>
                    </div>
                    <li>
                        <a href="https://www.youtube.com/watch?v=TlB_eWDSMt4">home</a>
                    </li>
                    <li>
                        <a href="#">about</a>
                    </li>
                    <li>
                        <a href="#">contact us</a>
                    </li>
                </ul>
 
                <div className="rightnav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btnsearch">
                        Search
                    </button>
                </div>
            </nav>
 
            <section className="section">
                <div className="box-main">
                    <div className="firstHalf">
                        <h1 className="text-big">
                           react
                        </h1>
                        <p class="text-small">
                        ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="box-main">
                    <div className="secondHalf">
                        <h1 className="text-big" id="program">
                           react
                        </h1>
                        <p class="text-small">
                        ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="box-main">
                    <div className="secondHalf">
                        <h1 className="text-big" id="program">
                            react
                        </h1>
                        <p class="text-small">
                        ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="box-main">
                    <div className="secondHalf">
                        <h1 className="text-big" id="program">
                            react
                        </h1>
                        <p className="text-small">
                        ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    end 
                </p>
            </footer>
        </div>
    );
}
 
export default App;
