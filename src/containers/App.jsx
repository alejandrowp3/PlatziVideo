import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    return (
        <div className="App">
            <Header></Header>
            <Search></Search>
            <Categories title="Mi lista">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Categories title="Mi lista1">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Categories title="Mi lista1">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Footer></Footer>
        </div>
    )
};

export default App;