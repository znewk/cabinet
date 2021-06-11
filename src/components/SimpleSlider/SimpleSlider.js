import React from "react";
import Slider from "react-slick";
import styles from '../../../styles/components/SimpleSlider.module.css'
import SubCourseCard from "../SubCourseCard/SubCourseCard";
import StockCard from "../StockCard/StockCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseTeacherCard from "../CourseTeacherCard/CourseTeacherCard";

export default function SimpleSlider(props) {

    let slidesCount = 0;

    if (props.stocks !== undefined){
        if (props.stocks.length < 5){
            slidesCount = props.stocks.length;
        } else{
            slidesCount = 5;
        }
    } else if(props.subcourses !== undefined){
        if (props.subcourses.length < 4){
            slidesCount = props.subcourses.length;
        }
        else{
            slidesCount = 4;
        }
    } else if(props.teachers !== undefined){
        if (props.teachers.length < 4){
            slidesCount = props.teachers.length;
        }
        else{
            slidesCount = 4;
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesCount,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        variableWitdh: true,
        centerMode: (props.stocks === undefined) ? false : true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ],
    };


    // Должен быть элемент subcourses в пропсах

    if (props.subcourses !== undefined) {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <Slider {...settings} style={{height: '100%'}}>
                    {props.subcourses.map(elem => <SubCourseCard course={elem}/>)}
                </Slider>
            </div>
        );
    } else if (props.stocks !== undefined) {
        return (
            <div style={{width: '100%'}}>
                <Slider {...settings}>
                    {props.stocks.map(elem => <StockCard course={elem}/>)}
                </Slider>
            </div>
        );
    } else if (props.teachers !== undefined) {
        return (
            <div style={{width: '100%'}}>
                <Slider {...settings}>
                    {props.teachers.map(elem => <CourseTeacherCard teacher={elem}/>)}
                </Slider>
            </div>
        )
    } else {
        return (
            <div style={{width: '100%', }}>

            </div>
        );
    }
}

