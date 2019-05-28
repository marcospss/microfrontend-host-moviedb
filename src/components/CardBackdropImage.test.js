import React from "react";
import { shallow } from './../enzyme';
import { Link } from "react-router-dom";


import MOCK from './../mocks';
import CardBackdropImage from './CardBackdropImage';

describe('<CardBackdropImage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CardBackdropImage
            data={ MOCK.popular.results[0] }
            styleName="latest-movie"
            mediaType="movie"
        />);
    });

    it('should render <CardBackdropImage /> without overview media', () => {
        expect(wrapper.find('figure')).toHaveLength(1);
        expect(wrapper.find('p[data-show="showOverview"]')).toHaveLength(0);
    });

    it('should render <CardBackdropImage /> with overview media', () => {
        wrapper.setProps({ showOverview: true })
        expect(wrapper.find('p[data-show="showOverview"]')).toHaveLength(1);
    });

    it('should render <CardBackdropImage /> link media', () => {
        expect(wrapper.contains(<Link to="/details/movie/458156"><img src="https://image.tmdb.org/t/p/w300/kcga7xuiQVqM9WHfWnAbidxU7hd.jpg" alt="John Wick: Chapter 3 – Parabellum" /></Link>)).toBeTruthy();
    });

});
