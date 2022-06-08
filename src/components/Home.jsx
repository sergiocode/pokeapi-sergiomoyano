import React, { Component } from "react";

const Home = () => {
    return (
        <div id="home-root">
            <h1>Home</h1>

            <div id="carouselExampleControls" class="carousel slide carousel-inicio" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/src/assets/img/carousel1.jpeg" class="d-block w-100 carousel-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="/src/assets/img/carousel2.jpeg" class="d-block w-100 carousel-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="/src/assets/img/carousel3.jpeg" class="d-block w-100 carousel-image" alt="..."/>
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