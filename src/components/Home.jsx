import React, { Component } from "react";

const Home = () => {
    return (
        <div id="home-root">
            <h1>Home</h1>

            <div id="carouselExampleControls" class="carousel slide carousel-inicio" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://fondosmil.com/fondo/14723.jpg" class="d-block w-100 carousel-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images2.alphacoders.com/686/686188.jpg" class="d-block w-100 carousel-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.pinimg.com/originals/1b/6c/ac/1b6cac6900112962ffc8a9633c0f858f.jpg" class="d-block w-100 carousel-image" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Home;