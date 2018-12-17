import React from 'react';

const AboutView = () => {
        return(
                <div>
                <header className="header">
                        <h1>About</h1>
                </header>
                        <div className="container">
                                <div className="row">
                                        <div className="col-sm-11 blog-main">
                                                <div className="blog-post">
                                                        <h2 className="blog-post-title">Todo app practice's written using ReactJS and Redux library.</h2>
                                                        <p className="blog-post-meta">Author: <a href="/about">Vy Nguyen</a></p>

                                                        <p> Compare these to a non-framework implementation. TodoMVC is a godsend for helping developers find what well-developed frameworks match their mental model of application architecture. Modern JavaScript developers realise an MVC framework is essential for managing the complexity of their apps</p>
                                                        <hr />
                                                        <p>Cum sociis natoque penatibus et magnis <a href="/about">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                                                        <blockquote>
                                                        <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                                        </blockquote>
                                                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                                                </div>
                                                
                                        <div className="blog-post">
                                                <h2 className="blog-post-title">New feature</h2>
                                                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                                <ul>
                                                        <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                                        <li>Donec id elit non mi porta gravida at eget metus.</li>
                                                        <li>Nulla vitae elit libero, a pharetra augue.</li>
                                                </ul>
                                                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                                                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
                );
}

export default AboutView;