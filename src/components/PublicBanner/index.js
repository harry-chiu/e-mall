import React from 'react';
import Slider from 'react-slick';
import { renderDots } from './utils';
import { Container, Image, NextIcon, PreviousIcon } from './style';

const PublicBanner = () => {
  return (
    <Container>
      <Slider
        dots
        infinite
        autoplay
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        // Custom Arrow
        prevArrow={<PreviousIcon />}
        nextArrow={<NextIcon />}
        // Custom Dots
        appendDots={renderDots}
      >
        <Image src="https://images.unsplash.com/photo-1505740106531-4243f3831c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" />
        <Image src="https://images.unsplash.com/photo-1505739998589-00fc191ce01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" />
        <Image src="https://images.unsplash.com/photo-1505740494862-e7e49c099cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" />
      </Slider>
    </Container>
  );
};

export default PublicBanner;
