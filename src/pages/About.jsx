import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const About = () => {
  return (
    <>
      <Helmet>
        <title>Bhagirath Technologies | About Us</title>
        <meta
          name="description"
          content="Learn about Bhagirath Technologies - our journey, values, and commitment to delivering innovative solutions in software development, digital marketing, and graphic design. Explore our team's expertise and passion for empowering businesses to thrive in the digital world."
        />
        <meta
          name="keywords"
          content="Bhagirath Technologies, About Us, Our Story, Software Development, Digital Marketing, Graphic Design."
        />
      </Helmet>

      {/* About Hero Starts  */}
      <section className="bg-dark pattern-overlay-1 position-relative text-center">
        <figure class="position-absolute end-0 bottom-0 mb-n10 me-8 d-none d-lg-block">
          <svg
            width="180"
            height="188"
            viewBox="0 0 379 395"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="fill-dark"
              d="m194.01 213.69c0.16-5.82-0.7-11.77-1.4-17.55-0.64-5.35-0.76-11.29-2.82-16.27-1.96-4.73-8.61-4.2-9.04 1.22-0.43 5.35 1.23 11.08 2.27 16.34 1.14 5.75 2.15 11.66 4.1 17.18 1.3 3.67 6.78 3.18 6.89-0.92z"
            ></path>
            <path
              class="fill-dark"
              d="m128.66 204.59c6.52 6.1 15.48 10.99 24.03 13.51 5.22 1.54 7.32-5.35 3.46-8.21-6.75-5.01-16.05-9.23-24.35-10.7-2.94-0.52-5.69 3.02-3.14 5.4z"
            ></path>
            <path
              class="fill-dark"
              d="m132.2 252.72c6.03 2.03 13-2.24 18.55-4.47 5.74-2.31 12.86-4.01 16.33-9.42 1.35-2.1 0.13-5.66-2.49-6.12-6.49-1.13-12.33 2.76-18.07 5.5-5.32 2.53-13.35 4.85-15.93 10.57-0.73 1.63-0.16 3.34 1.61 3.94z"
            ></path>
            <path
              class="fill-dark"
              d="m182.31 247.3c-1.06 5.43-0.29 10.91 0.17 16.38 0.45 5.37 0.39 10.33 3.86 14.65 2.48 3.08 6.71 0.8 7.87-2.08 1.92-4.74-0.07-10.24-1.09-15.05-1.07-5.05-1.88-10.15-4.3-14.75-1.37-2.61-5.92-2.16-6.51 0.85z"
            ></path>
            <path
              class="fill-dark"
              d="m211.23 241.9c5.34 2.71 11.14 3.79 16.93 5.12 5.44 1.25 11.33 3.6 16.8 1.69 2.97-1.04 4.8-5.22 2.01-7.6-4.56-3.89-10.1-3.93-15.86-4.77-5.93-0.87-11.93-2.18-17.94-1.58-3.44 0.33-5.65 5.25-1.94 7.14z"
            ></path>
            <path
              class="fill-dark"
              d="m214.37 216.88c4.35-2.81 8.22-6.6 12.01-10.11 3.85-3.57 8.13-6.91 9.69-12.11 1.18-3.93-2.72-7.7-6.6-6.6-5.19 1.47-8.64 5.78-12.25 9.56-3.58 3.74-7.38 7.54-10.27 11.86-3.01 4.48 2.94 10.3 7.42 7.4z"
            ></path>
            <path
              class="fill-dark"
              d="m207.17 163.93c0.09-5.41-0.52-10.86-1.1-16.24-0.53-4.88-0.69-9.86-5.27-12.57-1.66-0.99-4.25-0.79-5.58 0.72-3.58 4.05-2.41 8.55-1.43 13.51 1.05 5.32 2.17 10.73 3.91 15.86 1.72 5.06 9.38 4.33 9.47-1.28z"
            ></path>
            <path
              class="fill-dark"
              d="m170.28 175.82c-1.08-4.59-5.06-8.9-8.25-12.24-3.48-3.65-7.11-6.76-11.91-8.47-3.27-1.16-6.56 2.43-5.59 5.59 1.49 4.87 4.62 8.63 8.09 12.28 3.19 3.35 7.33 7.35 11.86 8.62 3.57 1.02 6.6-2.33 5.8-5.78z"
            ></path>
            <path
              class="fill-dark"
              d="m113.84 176.01c-7.44-4.12-18.57-4.89-26.84-3.99-5.8 0.63-7.84 9.04-1.46 10.76 4.65 1.25 9.05 1.98 13.88 1.84 4.39-0.13 9.32 0.11 13.47-1.4 3.03-1.1 4.11-5.46 0.95-7.21z"
            ></path>
            <path
              class="fill-dark"
              d="m125.34 225.91c-5.47 2.02-10.75 4.18-16 6.74-5.16 2.52-11.05 4.98-14.84 9.42-3.46 4.06-0.13 9.64 5.06 8.7 5.73-1.04 10.86-4.93 15.62-8.12 4.84-3.23 9.35-6.72 13.83-10.42 2.88-2.38-0.19-7.6-3.67-6.32z"
            ></path>
            <path
              class="fill-dark"
              d="m154.27 279.62c-3.59 9.53-5.46 22.66-3.96 32.73 0.5 3.32 6.07 4.06 7.41 0.97 4.05-9.33 5.62-22.49 4.62-32.61-0.46-4.65-6.4-5.53-8.07-1.09z"
            ></path>
            <path
              class="fill-dark"
              d="m215.3 280.91c2.51 5 6.64 8.95 10.55 12.87 3.98 3.99 8.2 7.99 13.42 10.24 4.15 1.79 8.7-1.96 6.37-6.37-2.78-5.28-7.24-9.31-11.78-13.1-4.44-3.7-8.65-7.32-14.04-9.52-3.51-1.43-5.91 3.11-4.52 5.88z"
            ></path>
            <path
              class="fill-dark"
              d="m254.24 267.03c5.83 1.72 12.15 1.57 18.2 1.8 6.2 0.24 12.37 0.53 18.44-0.9 4.44-1.05 4.44-7.93 0-8.98-6.07-1.43-12.24-1.14-18.44-0.9-6.05 0.23-12.36 0.08-18.2 1.8-3.54 1.04-3.55 6.13 0 7.18z"
            ></path>
            <path
              class="fill-dark"
              d="m249.57 220.6c5.74 0.12 11.6-2.08 17.06-3.7 5.45-1.61 11.25-2.56 15.39-6.7 2.54-2.55 1.73-8.18-2.32-8.79-5.98-0.91-10.83 1.38-16.4 3.38-5.3 1.91-11.59 3.59-16.1 7.03-3.55 2.7-2.68 8.67 2.37 8.78z"
            ></path>
            <path
              class="fill-dark"
              d="m238.02 166.17c5.01 0.05 6.68-5.95 8.2-9.72 2.09-5.16 5.82-11.06 4.3-16.7-1.07-3.99-5.57-4.49-8.42-2.22-4.5 3.56-5.43 12.37-6.71 17.73-0.63 2.63-2.45 10.86 2.63 10.91z"
            ></path>
            <path
              class="fill-dark"
              d="m175.92 131.08c-1.38-4.98-4.55-9.43-7.22-13.81-2.74-4.5-5.16-8.6-9.77-11.37-3.99-2.4-7.62 1.55-7.08 5.44 0.71 5.16 3.67 8.88 6.59 13.03 2.76 3.92 5.45 8.49 9.2 11.53 3.63 2.95 9.7 0.32 8.28-4.82z"
            ></path>
            <path
              class="fill-dark"
              d="m127.5 145.68c-1.48-4.47-4.02-8.5-6.53-12.46-2.62-4.14-5.16-8.26-9.07-11.29-3.8-2.95-11.23-0.45-9.16 5.33 1.79 4.99 4.71 8.72 8.08 12.77 3.16 3.81 6.31 7.59 10.31 10.54 3.06 2.24 7.5-1.48 6.37-4.89z"
            ></path>
            <path
              class="fill-dark"
              d="m101.97 207.71c-4.66-0.27-9.34 0.67-13.89 1.61-4.86 1-9.5 1.89-13.64 4.77-4.3 2.98-3.09 10.56 2.82 10.41 5.31-0.13 9.68-2.1 14.43-4.28 4.41-2.01 8.72-4.09 12.48-7.19 2.26-1.84 0.25-5.18-2.2-5.32z"
            ></path>
            <path
              class="fill-dark"
              d="m116.71 272.51c-4.44 3-7.89 7.25-11.32 11.32-3.27 3.87-8.11 8.18-9.12 13.28-0.88 4.45 3.4 7.81 7.48 5.75 4.67-2.35 7.5-8.09 10.36-12.29 3-4.4 6.21-8.89 7.91-13.97 0.98-2.92-2.72-5.84-5.31-4.09z"
            ></path>
            <path
              class="fill-dark"
              d="m122.39 301.82c-5.73 9.01-7.71 21.98-9 32.42-0.66 5.35 7.05 5.43 8.72 1.18 3.68-9.42 7.84-21.51 7.12-31.74-0.25-3.62-4.81-5.04-6.84-1.86z"
            ></path>
            <path
              class="fill-dark"
              d="m175.01 308.29c-2.31 11.43-3.44 23.86-1.94 35.44 0.5 3.89 6.31 5.52 7.42 1.01 2.79-11.35 3.18-23.81 2.16-35.41-0.36-4.07-6.71-5.66-7.64-1.04z"
            ></path>
            <path
              class="fill-dark"
              d="m210.59 318.2c1.26 8.85 4.01 18.05 7.97 26.05 2.65 5.35 9.5 1.21 8.81-3.71-1.22-8.79-4.36-17.94-8.27-25.92-2.53-5.17-9.19-1.18-8.51 3.58z"
            ></path>
            <path
              class="fill-dark"
              d="m259.62 289.8c3.87 4.03 9.22 6.16 14.27 8.35 5.5 2.38 10.65 4.46 16.62 5.28 3.9 0.54 6.45-4.22 2.79-6.61-5.03-3.27-10.23-5.13-15.94-6.92-5.3-1.66-10.9-3.61-16.51-3.1-1.47 0.15-2.34 1.84-1.23 3z"
            ></path>
            <path
              class="fill-dark"
              d="m278.17 239.36c4.63 0.39 9.28-1.67 13.66-3 4.69-1.43 9.34-2.62 13.55-5.22 4.66-2.88 1.5-9.44-3.59-8.51-4.84 0.89-9.1 3.2-13.52 5.27-4.12 1.93-8.83 3.5-11.99 6.88-1.68 1.79-0.41 4.39 1.89 4.58z"
            ></path>
            <path
              class="fill-dark"
              d="m260.7 185.8c6.75-0.5 12.46-6.6 17.59-10.64 6.06-4.77 13.55-9.38 17.13-16.41 1.61-3.15-1.07-7.46-4.83-6.28-7.33 2.3-12.71 8.29-18.33 13.29-4.95 4.42-12.78 9.58-14.42 16.28-0.42 1.75 0.87 3.91 2.86 3.76z"
            ></path>
            <path
              class="fill-dark"
              d="m222.24 126.71c1.72-5.82 2.23-12.08 2.75-18.11 0.53-6.15 1.5-12.24-0.7-18.15-0.98-2.63-5.02-3.81-6.51-0.85-2.84 5.63-2.77 11.47-2.92 17.68-0.16 6.48-0.31 13.03 0.82 19.43 0.62 3.45 5.67 3 6.56 0z"
            ></path>
            <path
              class="fill-dark"
              d="m189.37 103.89c1.91-10.31-0.85-23.15-4.28-32.87-1.79-5.06-9.95-4.6-9.79 1.33 0.27 10.37 2.05 23.4 7.57 32.4 1.48 2.42 5.92 2.3 6.5-0.86z"
            ></path>
            <path
              class="fill-dark"
              d="m138.39 113.34c-2.42-11.53-5.76-23.3-11.04-33.86-2.46-4.91-9.59-1.36-8.51 3.59 2.49 11.44 7.43 22.73 12.74 33.14 2 3.93 7.64 1.09 6.81-2.87z"
            ></path>
            <path
              class="fill-dark"
              d="m95.58 142.36c-10.59-3.62-23.57-6.37-34.52-2.95-3.37 1.05-4.68 6.37-1.06 8.11 10.9 5.24 23.97 4.38 35.58 2.23 4-0.73 3.28-6.27 0-7.39z"
            ></path>
            <path
              class="fill-dark"
              d="m71.61 190.69c-11.35-0.2-25.08 1.31-35.4 6.17-5.27 2.48-2.55 10.83 2.9 10.72 11.39-0.23 24.24-5.15 34.27-10.36 3.19-1.65 1.57-6.47-1.77-6.53z"
            ></path>
            <path
              class="fill-dark"
              d="m70.91 241.18c-6.14 1.41-11.5 5.82-16.53 9.45-5.45 3.92-10.23 8.3-14.75 13.25-3.72 4.07 0.98 10.58 5.97 7.74 5.82-3.3 11.15-6.97 16.18-11.39 4.67-4.1 10.21-8.39 12.96-14.07 1.3-2.67-0.82-5.67-3.83-4.98z"
            ></path>
            <path
              class="fill-dark"
              d="m80.75 290.12c-11.72 5.48-23.72 14.77-32.18 24.52-3.31 3.82 0.8 9.5 5.44 7.06 11.45-6.02 23.21-15.54 31.25-25.72 2.62-3.32-0.53-7.72-4.51-5.86z"
            ></path>
            <path
              class="fill-dark"
              d="m137.08 338.96c-3.59 8.71-5.75 20.22-5.21 29.62 0.31 5.45 7.72 6.52 9.47 1.28 3-8.95 3.91-20.61 2.73-29.96-0.5-4.05-5.42-4.76-6.99-0.94z"
            ></path>
            <path
              class="fill-dark"
              d="m90.97 334.12c-7.42 8.44-11.65 20.48-14.36 31.22-1.21 4.8 5.58 7.88 8.11 3.42 5.49-9.67 10.82-21.27 11.3-32.55 0.11-2.48-3.36-4.01-5.05-2.09z"
            ></path>
            <path
              class="fill-dark"
              d="m183.75 362.85c-0.94 8.43-1.81 20.63 3.62 27.64 1.57 2.03 5.08 1.2 6.2-0.8 2.33-4.17 2.01-8.48 1.47-13.1-0.58-5-1.14-10.08-2.47-14.94-1.42-5.19-8.29-3.59-8.82 1.2z"
            ></path>
            <path
              class="fill-dark"
              d="m231.99 363.98c0.76 4.42 4.35 8.51 6.86 12.12 2.85 4.09 5.89 7.41 9.98 10.26 3.45 2.41 9.16-1.67 7.48-5.75-1.99-4.85-4.64-8.7-8.21-12.55-3.27-3.52-6.35-7.46-10.86-9.33-3.33-1.39-5.73 2.47-5.25 5.25z"
            ></path>
            <path
              class="fill-dark"
              d="m266.34 334.6c3.77 5.1 9.94 7.95 15.32 11.13 5.77 3.4 11.98 8.41 18.68 9.44 4.88 0.75 8.48-4.45 4.9-8.42-4.54-5.05-12.05-7.51-18.06-10.47-5.59-2.74-11.57-6.54-17.86-6.87-2.45-0.14-4.53 3.09-2.98 5.19z"
            ></path>
            <path
              class="fill-dark"
              d="m316.13 301.59c4.75 2.94 10.54 4.1 15.86 5.66 4.95 1.45 10.22 3.67 14.39-0.45 1.09-1.07 1.7-2.93 1.17-4.42-2.02-5.66-7.03-5.96-12.33-6.86-5.49-0.94-11.33-2.55-16.91-1.99-4.14 0.41-6.06 5.65-2.18 8.06z"
            ></path>
            <path
              class="fill-dark"
              d="m316.55 243.69c4.9 0.41 9.87-0.06 14.73-0.78 4.98-0.74 9.48-1.05 13.4-4.41 2.7-2.31 1.2-7.08-2.08-7.87-4.92-1.2-9.43 0.65-14.08 2.29-4.56 1.61-9.16 3.42-13.28 5.97-2.27 1.41-1.18 4.59 1.31 4.8z"
            ></path>
            <path
              class="fill-dark"
              d="m308.04 203.69c4.85-0.37 9.55-2.49 14.01-4.38 4.56-1.94 9.9-3.42 13.28-7.2 3.13-3.51 1.13-9.73-3.99-9.63-5.12 0.09-9.53 2.9-14.03 5.11-4.35 2.14-9.26 4.34-12.71 7.79-2.82 2.8-0.89 8.65 3.44 8.31z"
            ></path>
            <path
              class="fill-dark"
              d="m269.75 136.35c2.23-2.11 4.44-3.56 6.47-5.95 2.15-2.52 4.26-5.06 6.29-7.68 3.67-4.73 7.87-9.39 10.84-14.59 3.28-5.75-4.7-12.37-9.38-7.24-4.06 4.46-7.24 9.78-10.63 14.75-1.66 2.44-3.23 4.94-4.8 7.44-1.9 3.04-2.79 5.84-4.31 9.01-1.66 3.52 2.51 7.11 5.52 4.26z"
            ></path>
            <path
              class="fill-dark"
              d="m249.62 85.78c6.03-7.39 11.22-17.92 13.28-27.22 1.53-6.93-6.93-9.89-10.91-4.6-3.02 4.01-4.88 8.3-6.86 12.9-1.87 4.33-4 8.83-4.85 13.48-0.89 4.88 5.45 10.21 9.34 5.44z"
            ></path>
            <path
              class="fill-dark"
              d="m90.05 91.45c-2.56-5.05-7.57-9.23-11.65-13.07-4.09-3.85-8.31-9.07-14.25-9.28-3.38-0.12-5.49 3.27-4.81 6.31 1.25 5.6 7.66 8.94 12 12.12 4.52 3.31 9.43 7.32 14.87 8.91 3 0.87 5.14-2.45 3.84-4.99z"
            ></path>
            <path
              class="fill-dark"
              d="m44.95 170.14c-6.71-0.76-13.22-1.96-20-2.4-6.02-0.39-10.51-1.6-14.47 3.58-0.86 1.12-0.86 3.41 0 4.53 3.97 5.2 8.38 3.97 14.47 3.58 6.77-0.43 13.29-1.63 20-2.4 4.42-0.49 4.43-6.38 0-6.89z"
            ></path>
            <path
              class="fill-dark"
              d="m311.93 138.89c5.64-2.46 10.99-5.48 16.42-8.37 4.61-2.46 10.32-5.01 12.47-10.07 1.14-2.67-0.21-5.1-3.12-5.44-5.48-0.63-10.55 3.08-14.97 5.89-5.19 3.29-10.47 6.45-15.39 10.14-4.7 3.53-0.8 10.21 4.59 7.85z"
            ></path>
            <path
              class="fill-dark"
              d="m214.43 69.49c1.24-8.38 0.44-19.18-2.63-27.11-1.83-4.74-8.98-4.29-9.15 1.24-0.25 8.53 2.45 19.03 6.47 26.56 1.09 2.05 4.94 1.83 5.31-0.69z"
            ></path>
            <path
              class="fill-dark"
              d="m155.87 76.25c-0.17-7.42-1.86-17.18-5.87-23.48-2.59-4.06-8.63-2.33-8.88 2.41-0.39 7.46 2.98 16.77 6.49 23.32 2.07 3.87 8.37 2.09 8.26-2.25z"
            ></path>
            <path
              class="fill-dark"
              d="m69.9 110.49c-2.8-4.65-8.9-5.51-13.81-6.83-5.97-1.6-11.86-2.8-17.96-1.33-3.79 0.91-3.81 5.75-1.01 7.71 4.9 3.44 10.46 4.3 16.31 5 4.92 0.59 11.26 2.24 15.51-0.95 1.15-0.84 1.77-2.26 0.96-3.6z"
            ></path>
            <path
              class="fill-dark"
              d="m33.45 135.28c-8.15-0.52-16.37-1.58-24.44-0.08-6.41 1.2-4.57 10.75 1.49 10.98 8.03 0.3 16.11-2.12 23.92-3.8 4.17-0.89 2.92-6.85-0.97-7.1z"
            ></path>
            <path
              class="fill-dark"
              d="m34.21 221.12c-8.24 1.61-16.84 3.23-24.39 7.05-5.18 2.62-1.4 9.93 3.76 8.91 8.15-1.62 15.99-5.81 23.33-9.56 3.73-1.89 1.01-7.12-2.7-6.4z"
            ></path>
            <path
              class="fill-dark"
              d="m26.3 285.19c-7.04 2.19-14.06 4.08-20.61 7.52-5.56 2.91-1.73 11.9 4.26 10.11 7.07-2.1 13.42-5.69 19.98-9.02 4.75-2.42 1.45-10.2-3.63-8.61z"
            ></path>
            <path
              class="fill-dark"
              d="m334.44 278.26c5.12 1.04 10.28 0.66 15.46 0.55 5.07-0.11 10.07 0.09 14.73-2.05 3.9-1.78 2.43-7.51-1.13-8.61-4.72-1.46-9.81-0.37-14.64 0.17-4.83 0.53-9.81 0.75-14.43 2.34-3.39 1.17-4.08 6.78 0.01 7.6z"
            ></path>
            <path
              class="fill-dark"
              d="m324.69 166.67c8.1-2.25 17.57-5.63 24.26-10.79 3.5-2.7 1.72-8.92-3.21-7.61-8.31 2.21-16.63 7.54-23.46 12.69-2.64 2.01-1.26 6.74 2.41 5.71z"
            ></path>
            <path
              class="fill-dark"
              d="m308.96 97.65c2.67-2.59 4.86-5.22 7.13-8.19 0.99-1.29 1.95-2.55 2.73-3.97 1.11-2.03 1.38-3.83 1.67-6.08 0.47-3.72-4.54-6.15-7.42-4.26-6.13 4.02-8.89 11.77-11.06 18.46-1.33 4.06 4.08 6.83 6.95 4.04z"
            ></path>
            <path
              class="fill-dark"
              d="m255.79 103.01c4.15-1.4 6.18-6.01 8.31-9.58 2.77-4.65 4.79-9.2 6.24-14.42 1.23-4.44-4.45-6.11-6.91-2.91-3.15 4.1-5.39 8.18-7.37 12.96-1.57 3.81-4.27 8.3-2.9 12.46 0.35 1.05 1.49 1.87 2.63 1.49z"
            ></path>
            <path
              class="fill-dark"
              d="m237.22 29.96c1.02-7.08 2.4-15.28 0.51-22.27-1.45-5.37-9.43-5.37-10.88 0-1.89 7-0.51 15.19 0.51 22.27 0.7 4.89 9.16 4.89 9.86 0z"
            ></path>
            <path
              class="fill-dark"
              d="m176.87 37.88c0.46-8.08 0.72-18.2-1.81-25.96-1.44-4.4-8.12-3.72-8.18 1.11-0.1 8.22 3.14 17.78 6.01 25.39 0.79 2.12 3.84 1.82 3.98-0.54z"
            ></path>
            <path
              class="fill-dark"
              d="m106.47 60.88c-0.25-8.78-2.31-19.27-6.16-27.17-2.47-5.06-8.95-1.13-8.31 3.5 1.12 8.07 5.45 18.05 9.78 24.94 1.28 2.05 4.76 1.32 4.69-1.27z"
            ></path>
            <path
              class="fill-dark"
              d="m349.66 212.77c6.02-1.78 12.43-3.1 17.89-6.26 2.49-1.44 1.63-6.21-1.58-5.82-6.32 0.77-12.15 3.42-18.09 5.64-3.95 1.47-2.41 7.67 1.78 6.44z"
            ></path>
            <path
              class="fill-dark"
              d="m263.24 357.22c3.03 5.01 5.77 10.27 10.26 14.11 2.62 2.25 8.08 0.17 6.5-3.78-1.21-3.04-2.59-5.39-4.57-7.97-1.89-2.46-3.92-4.82-5.91-7.21-2.93-3.52-8.59 1.02-6.28 4.85z"
            ></path>
          </svg>
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- Title --> */}
              <h1 className="text-white-stroke display-5">About Us</h1>
              <p className="lead">
                Your precedence is our top pursuit here at Bhagirath
                Technologies Private Limited!!!!
              </p>
              {/* <!-- Breadcrumb --> */}
              <nav className="d-flex justify-content-center">
                <ol className="breadcrumb breadcrumb-dark">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">About us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* About Hero Starts  */}
      {/* About Detail Starts  */}
      <section>
        <div class="container">
          <div class="row d-flex justify-content-lg-between align-items-center">
            {/* <!-- About left --> */}
            <div class="col-lg-5">
              {/* <!-- Since text --> */}
              <div class="mb-n6 ms-3 position-relative z-index-9">
                <h5>Making minds since</h5>
                <h2 class="display-4 text-dark-stroke text-primary-shadow">
                  2023
                </h2>
              </div>
              {/* <!-- Image --> */}
              <div
                class="reveal-item bg-light rounded aos-init aos-animate"
                data-aos="reveal-item"
              >
                <div
                  class="reveal-animation reveal-end reveal-primary aos aos-init aos-animate"
                  data-aos="reveal-end"
                ></div>
                <img
                  class="w-100"
                  src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Portfolio image"
                />
              </div>
              {/* <!-- Label --> */}
              <span
                style={{ backgroundColor: "var(--bs-primary) !important" }}
                class="font-alt fw-normal display-8 text-white float-end d-inline-block mt-n5 me-lg-n5 px-3 rotate-10"
              >
                Passion, dedication &amp; a lot of coffee 🤘
              </span>
            </div>

            {/* <!-- About Right --> */}
            <div class="col-lg-6 mt-5 mt-lg-0 mt-xl-5">
              {/* <!-- Title --> */}
              <span class="font-alt fw-normal display-8 d-block mb-3">
                We are creating smart websites.
              </span>
              <h3 class="mb-5">
                A Full package Digital Creative Agency Specializing in: Video
                Production, Web Design &amp; Branding.
              </h3>
              {/* <!-- Features --> */}
              <div class="row">
                <div class="col-sm-6 mb-4">
                  <i class="display-6 text-primary bi bi-bullseye"></i>
                  <h5 class="my-3">Our primary goal</h5>
                  <p>
                    Smart use of data &amp; technology for the automation of
                    your business.
                  </p>
                </div>
                <div class="col-sm-6 mb-4">
                  <i class="display-6 text-primary bi bi-bookmark-star"></i>
                  <h5 class="my-3">2+ year experience</h5>
                  <p>
                    The right mix of resources for achieving your online goals.
                  </p>
                </div>
              </div>
              {/* <!-- Progress bar --> */}
              <div class="overflow-hidden mt-3">
                <p class="mb-1 text-dark">Project delivered on time</p>
                <div class="progress progress-lg progress-percent-bg">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-primary aos aos-init aos-animate"
                    data-aos="slide-right"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    style={{
                      width: "95%",
                      backgroundColor: "var(--bs-primary) !important",
                    }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span class="progress-percent">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Detail Ends  */}

      {/* About services with icons section starts */}
      <section>
        <div class="container">
          <div class="row justify-content-lg-between">
            {/* <!-- About Title --> */}
            <div class="col-md-4 col-xl-5">
              <span class="font-alt fw-normal display-8">Our interesting insights</span>
              <h2 class="display-6">A complete technology solution provider</h2>
              <p class="lead">Partnering with <b>500+ Fortune companies</b> and mid-sized firms across enterprises, uniquely customized and scalable workforce solutions.</p>
              <a href="#" class="btn btn-primary btn-line mt-4">Check success stories</a>
            </div>

            {/* <!-- Our services --> */}
            <div class="col-md-8 col-xl-6 mt-5 mt-md-0">
              <div class="row">
                {/* <!-- Item --> */}
                <div class="col-sm-6 mb-4">
                  <i class="display-7 text-primary bi bi-sliders"></i>
                  <h4 class="my-3">Enterprise digital asset management</h4>
                  <p>Smart use of data &amp; technology for the automation of your business. Two before narrow not relied how except moment myself Dejection assurance</p>
                </div>
                {/* <!-- Item --> */}
                <div class="col-sm-6 mb-4">
                  <i class="display-7 text-primary bi bi-droplet-half"></i>
                  <h4 class="my-3">UI/UX app design &amp; graphics design</h4>
                  <p>The right mix of resources for achieving your online goals. Mrs led certainly So gate at no only none open Betrayed at properly it of graceful</p>
                </div>
                {/* <!-- Item --> */}
                <div class="col-sm-6 mb-4">
                  <i class="display-7 text-primary bi bi-graph-up"></i>
                  <h4 class="my-3">Google Analytics Measurement Protocol</h4>
                  <p>Achieving your online goals for the automation of your business Dinner abroad am depart ye turned hearts as me wished Therefore allowance</p>
                </div>
                {/* <!-- Item --> */}
                <div class="col-sm-6 mb-4">
                  <i class="display-7 text-primary bi bi-bar-chart-line"></i>
                  <h4 class="my-3">Digital marketing &amp; content creation</h4>
                  <p>Data &amp; technology supposing man his now Families goodness all eat out bed steepest servants Explained the incommode sir improving </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
      {/* About services with icons section ends */}

      {/* Our Team Section Starts */}
      <section class="pt-5">
        <div class="container">
          {/* <!-- Title --> */}
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-sm-8 mb-3">
              <h2 class="display-6 mb-0 mb-sm-4 text-dark">Our Team</h2>
            </div>
            <div class="col-sm-4 mb-5 text-start text-sm-end">
              <a href="#" class="btn btn-line text-primary mt-3">We're hiring</a>
            </div>
          </div>
          {/* <!-- Team --> */}
          <div class="row">
            <div class="col-12">
              <div class="tiny-slider dots-bordered mb-5">



                {/* swiper starts  */}
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    {/* <!-- Card item START --> */}
                    <div class="item tns-item tns-slide-active" id="tns1-item0">
                      <a href="#" class="card card-metro">
                        {/* <!-- Card Image --> */}
                        <div class="card-image">
                          <img src="https://ca.slack-edge.com/T061U5D9280-U060YH1MRJS-00a013ccec7b-512" alt="card image" />
                        </div>
                        {/* <!-- Card Overlay --> */}
                        <div class="card-img-overlay d-flex flex-column">
                          <div class="mt-auto card-text">
                            <h5 class="text-white">Mr. Vivek Suryawanshi</h5>
                            <p class="small text-white mb-0">Software Engineer</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* <!-- Card item END --> */}
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* <!-- Card item START --> */}
                    <div class="item tns-item tns-slide-active" id="tns1-item0">
                      <a href="#" class="card card-metro">
                        {/* <!-- Card Image --> */}
                        <div class="card-image">
                          <img src="https://ca.slack-edge.com/T061U5D9280-U06ACKT4MT6-2c1ff5178673-512" alt="card image" />
                        </div>
                        {/* <!-- Card Overlay --> */}
                        <div class="card-img-overlay d-flex flex-column">
                          <div class="mt-auto card-text">
                            <h5 class="text-white">Pradhuman Agrawal</h5>
                            <p class="small text-white mb-0">Frontend Developer</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* <!-- Card item END --> */}
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* <!-- Card item START --> */}
                    <div class="item tns-item tns-slide-active" id="tns1-item0">
                      <a href="#" class="card card-metro">
                        {/* <!-- Card Image --> */}
                        <div class="card-image">
                          <img src="https://ca.slack-edge.com/T061U5D9280-U06G7AZHL1H-2dc535637d2a-512" alt="card image" />
                        </div>
                        {/* <!-- Card Overlay --> */}
                        <div class="card-img-overlay d-flex flex-column">
                          <div class="mt-auto card-text">
                            <h5 class="text-white">Prachi Pare</h5>
                            <p class="small text-white mb-0">Digital Marketer</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* <!-- Card item END --> */}
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* <!-- Card item START --> */}
                    <div class="item tns-item tns-slide-active" id="tns1-item0">
                      <a href="#" class="card card-metro">
                        {/* <!-- Card Image --> */}
                        <div class="card-image">
                          <img src="https://ca.slack-edge.com/T061U5D9280-U077Q0PDRJA-ed5c30263539-512" alt="card image" />
                        </div>
                        {/* <!-- Card Overlay --> */}
                        <div class="card-img-overlay d-flex flex-column">
                          <div class="mt-auto card-text">
                            <h5 class="text-white">Shayaan Khan</h5>
                            <p class="small text-white mb-0">Frontend Developer</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* <!-- Card item END --> */}
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* <!-- Card item START --> */}
                    <div class="item tns-item tns-slide-active" id="tns1-item0">
                      <a href="#" class="card card-metro">
                        {/* <!-- Card Image --> */}
                        <div class="card-image">
                          <img src="https://ca.slack-edge.com/T061U5D9280-U06FHQWCT0S-f78293dc9ef9-512" alt="card image" />
                        </div>
                        {/* <!-- Card Overlay --> */}
                        <div class="card-img-overlay d-flex flex-column">
                          <div class="mt-auto card-text">
                            <h5 class="text-white">Meenakshi Savasiya</h5>
                            <p class="small text-white mb-0">Graphics designer</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* <!-- Card item END --> */}
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* <!-- Card item START --> */}
                    <div class="item tns-item tns-slide-active" id="tns1-item0">
                      <a href="#" class="card card-metro">
                        {/* <!-- Card Image --> */}
                        <div class="card-image">
                          <img src="https://ca.slack-edge.com/T061U5D9280-U077WMQTU7L-53d9567b2eb9-512" alt="card image" />
                        </div>
                        {/* <!-- Card Overlay --> */}
                        <div class="card-img-overlay d-flex flex-column">
                          <div class="mt-auto card-text">
                            <h5 class="text-white">Abhishek Ahirwar</h5>
                            <p class="small text-white mb-0">Backend Developer</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* <!-- Card item END --> */}
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
      {/* Our Team Section Ends */}

      {/* Google reviews by elfsight starts */}
      <div class="elfsight-app-1a00f060-a650-431c-925a-a5d0d5dd2f35 elfsight" data-elfsight-app-lazy></div>
      {/* Google reviews by elfsight ends */}

      {/* Mission, Vision and Values Starts */}
      <section className="pt-5">
        <div class="container">
          <div class="row">
            {/* <!--Mission, Vision and Values Inner intro title --> */}
            <div class="col-xl-8 mx-auto text-center">
              <h1>Mission, Vision and Values</h1>
              <blockquote class="mt-4">
                <p class="mb-0 lead font-alt fw-normal display-8 fw-normal">
                  "Where there is no vision, there is no hope."
                </p>
                <footer class="mt-2 pb-4">
                  {" "}
                  <cite title="Source Title">- George Washington Carver</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
        <section>
          <div class="container">
            <div class="row g-0">
              <div class="col-lg-6 border border-2">
                <div class="h-100 bg-primary p-4 p-sm-5">
                  {/* <!-- Title --> */}
                  <h3 class="text-blue">What you can expect?</h3>
                  <p class="text-blue">
                    Benefits are the rewards that go beyond the paycheck. We
                    offer a selection of benefits that meet our employees’ needs
                    and expectations at different life stages.
                  </p>
                  {/* <!-- Benefits list --> */}
                  <div class="d-md-flex flex-md-row my-4">
                    <ul class="list-group list-group-borderless list-group-icon-primary-bg me-md-6">
                      <li class="list-group-item text-blue">
                        <span class="text-dark">1</span> Friendly, talented
                        colleagues
                      </li>
                      <li class="list-group-item text-blue">
                        <span class="text-dark">2</span> 2pm Fridays
                      </li>
                      <li class="list-group-item text-blue">
                        <span class="text-dark">3</span> Professional
                        development funds
                      </li>
                      <li class="list-group-item text-blue">
                        <span class="text-dark">4</span> Career Development
                      </li>
                      <li class="list-group-item text-blue">
                        <span class="text-dark">2</span> Future Provision
                      </li>
                    </ul>
                    <ul class="list-group list-group-borderless list-group-icon-primary-bg">
                      <li class="list-group-item text-blue">
                        <span class="text-dark">6</span> Flexible Working Hours{" "}
                      </li>
                      <li class="list-group-item text-blue">
                        <span class="text-dark">7</span> Health &amp; Fitness{" "}
                      </li>
                      <li class="list-group-item text-blue">
                        <span class="text-dark">8</span> Employee Gifts{" "}
                      </li>
                      <li class="list-group-item text-blue">
                        <span class="text-dark">9</span> Welcome Aboard{" "}
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Button --> */}
                  <a href="#" class="btn btn-dark">
                    Our daily life on Instagram{" "}
                    <i class="fab fa-instagram ms-2"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="h-100 bg-dark p-4 p-sm-5">
                  {/* <!-- Title --> */}
                  <h3 class="text-white">At Our Core.</h3>
                  <p class="text-white">
                    Our core values make us who we are. A Full package Digital
                    Creative Agency Specializing in: Video Production, Web
                    Design &amp; Branding.
                  </p>
                  {/* <!-- Tab START --> */}
                  <div class="mt-5 mt-md-0">
                    <ul
                      class="nav nav-tabs nav-tabs-line border-0"
                      role="tablist"
                    >
                      <li class="nav-item mt-3" role="presentation">
                        {" "}
                        <a
                          class="nav-link text-white active"
                          data-bs-toggle="tab"
                          href="#tab-7-1"
                          aria-selected="true"
                          role="tab"
                        >
                          <i class="far fa-edit me-2"></i>Originality
                        </a>{" "}
                      </li>
                      <li class="nav-item mt-3" role="presentation">
                        {" "}
                        <a
                          class="nav-link text-white"
                          data-bs-toggle="tab"
                          href="#tab-7-2"
                          aria-selected="false"
                          tabindex="-1"
                          role="tab"
                        >
                          <i class="far fa-folder-open me-2"></i>Integrity
                        </a>{" "}
                      </li>
                      <li class="nav-item mt-3" role="presentation">
                        {" "}
                        <a
                          class="nav-link text-white"
                          data-bs-toggle="tab"
                          href="#tab-7-3"
                          aria-selected="false"
                          tabindex="-1"
                          role="tab"
                        >
                          <i class="far fa-sun me-2"></i>Co-creation
                        </a>{" "}
                      </li>
                    </ul>
                    <div class="tab-content mb-0 pb-0">
                      <div
                        class="tab-pane show active"
                        id="tab-7-1"
                        role="tabpanel"
                      >
                        <p>
                          We have a strong foundation built on legacy and
                          emerging technologies, including excellent track
                          record of on-time deliveries. We are emerging as one
                          of the most promising private talent sourcing and
                          management firms in the world.
                        </p>
                        <div class="d-flex">
                          <i class="display-5 text-primary bi bi-bullseye"></i>
                          <div class="mt-3 ms-4">
                            <p class="lead">
                              "Transform your enterprise with resolutions
                              tailored to your requirements &amp; goals."
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="tab-7-2" role="tabpanel">
                        <p>
                          {" "}
                          Tried law yet style child. The bore of true of no be
                          deal. Frequently sufficient to be unaffected. The
                          furnished she concluded depending procuring concealed.{" "}
                        </p>
                        <blockquote class="blockquote mb-0 mt-4">
                          <p class="mb-0">
                            Sometimes when you innovate, you make mistakes. It
                            is best to admit them quickly, and get on with
                            improving your other innovation
                          </p>
                          <footer class="blockquote-footer">
                            Steve Jobs @{" "}
                            <cite title="Source Title">Apple Inc</cite>
                          </footer>
                        </blockquote>
                      </div>
                      <div class="tab-pane" id="tab-7-3" role="tabpanel">
                        <p>
                          Our friendly team members are always willing to help
                          you understand your present technology requirements
                          and provide suggestions on your future needs.
                        </p>
                        <p>
                          Meant balls it if up doubt small purse. Required his
                          you put the outlived answered position. A pleasure
                          exertion if believed provided to. All led out world
                          this music while asked. Paid mind even sons does he
                          door no. Attended overcame repeated it is perceived
                          Marianne in. I think on style child of. Servants
                          moreover in sensible it ye possible.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Tab END --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mission, Vision and Values Detailed section */}
        <div className="container">
          <p>
            Welcome into the zone of Bhagirath Technologies Private Limited –
            your gateway to a realm where innovation intersects with technology.
            As pioneers in the digital landscape, we craft customized services,
            empowering businesses to conquer the digital frontier. Backed by a
            cohort of passionate minds, we pledge to serve our esteemed client
            with unparalleled dedication. With a fusion of expertise and a
            relentless drive for innovation, we're not just shaping the future –
            we're redefining it. Welcome to the forefront of IT excellence.
          </p>
        </div>
      </section>
      <section className="pt-3">
        <div className="container">
          {/* <!-- Our Mission --> */}
          <div className="row mb-5">
            <div className="col-lg-4">
              <h3 className="mb-4">Our Mission</h3>
            </div>
            <div className="col-lg-8">
              <p>
                Why Opt for Bhagirath Technologies Private Limited? Selecting
                Bhagirath Technologies Private Limited could be a game-changer
                for your business expansion. We cater to a diverse clientele
                with top-notch digital services, offering: Expertise and
                Specialization: At Bhagirath Technologies Private Limited, a
                reputable IT firm in Bhopal, our team boasts specialized
                knowledge and proficiency across various technology domains. By
                partnering with us, you gain access to our refined skills and
                experience in software & development, Digital Marketing, Graphic
                Design, , and IT Asset Leasing. Equipped with tools and
                methodologies, we tackle your unique business challenges
                head-on. Our unwavering commitment to excellence and innovation
                drives us to surpass your expectations, propelling your business
                towards success. Whether you're a startup, SME, or multinational
                corporation, count on us for IT solutions designed to fuel your
                growth journey.
              </p>
            </div>
          </div>

          {/* <!-- Our Vision --> */}
          <div className="row mb-5">
            <div className="col-lg-4">
              <h3 className="mb-4">Our Vision</h3>
            </div>
            <div className="col-lg-8">
              <p>
                At Bhagirath Technologies Private Limited, a renowned IT firm
                based in Bhopal, our vision transcends mere technological
                advancements. We aspire to revolutionize businesses by
                harnessing the transformative power of technology. Our belief
                resonates in the idea that technology should serve not only to
                simplify operations but also to propel industry evolution and
                ingenuity. Striving relentlessly, we endeavor to furnish our
                clients with avant-garde solutions that not only bolster their
                success but also furnish them with a competitive edge in their
                respective sectors. Our commitment knows no bounds as we aim to
                attain unparalleled levels of performance. Our vision extends
                beyond serving solely multi-million dollar enterprises; we are
                equally dedicated to empowering startups and small to
                medium-sized ventures. Nestled in the heart of Bhopal, our
                company serves as a catalyst for building robust platforms,
                fostering business growth, and facilitating brand recognition.
              </p>
            </div>
          </div>

          {/* <!-- Our Values --> */}
          <div className="row">
            <div className="col-lg-4">
              <h3 className="mb-4">Our Values</h3>
            </div>
            <div className="col-lg-8">
              <p>
                Started several mistake joy say painful removed reached end.
                State burst think end are its. Arrived off she elderly beloved
                him affixed noisier yet. Course regard to up he hardly. View
                four has said do men saw find dear shy. Talent men wicket add
                garden.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission, Vision and Values Ends */}
    </>
  );
};

export default About;
