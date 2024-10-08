import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data for the students
const students = [
    {
        name: "Allie Grater",
        title: "Lab Foundation 3.0",
        rank: "1st",
        batch: "Lab Foundation",
        image: "./images/m1.svg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis commodo.",
    },
    {
        name: "Lois Di Nominator",
        title: "Anatomy Batch",
        rank: "2nd",
        batch: "Anatomy Batch",
        image: "./images/m2.png",
        description:
            "Pellentesque lectus ipsum tristique non nibh in, cursus semper dolor. Nulla id sem lacus.",
    },
    {
        name: "Anne Teak",
        title: "Ummid Batch",
        rank: "3rd",
        batch: "Ummid Batch",
        image: "./images/m3.svg",
        description:
            "Mauris massa leo in risus tempus ultricies. Maecenas commodo nunc at nulla.",
    },
];

export function Student(){
    // Settings for the React Slick slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the speed for slower or faster transitions
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-7xl mx-auto py-16 px-4">
            <h2 className="text-center text-3xl font-semibold mb-4">
                What do Our Selected Students Say
            </h2>
            <p className="text-center text-lg mb-8">
                Our Journey Continues with the Trust of Lakh's of Students.
            </p>

            <Slider {...settings}>
                {students.map((student, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center relative">
                            <div className="relative">
                                {/* Student Image with Clip Path */}

                                <img
                                    src={student.image}
                                    alt={student.name}
                                    className="rounded-full mx-auto mb-4"
                                    style={{
                                        width: "256px",
                                        height: "256px",
                                        clipPath:
                                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                        objectFit: "cover", // Ensures the image covers the area without distortion
                                    }}
                                />

                                {/* Student Name - Positioned above Rank */}
                                <div
                                    className="absolute bottom-0 w-3/4 left-1/2 transform -translate-x-1/2 bg-customPurple text-white py-2 
                 "
                                    style={{
                                        bottom: "64px", // Adjust this value to move the name section up
                                    }}
                                >
                                    <h3 className="text-xl font-bold">{student.name}</h3>
                                </div>
                            </div>

                            {/* Rank Section - Triangle Shape */}
                            <h3
                                className=" flex items-center justify-center mx-auto text-white font-bold text-lg"
                                style={{
                                    height: "62px",
                                    width: "222px",

                                    flexShrink: 0,
                                    background:
                                        "linear-gradient(276deg, #6F3199 -0.84%, #1ECBDB 100%)",
                                    clipPath: "polygon(0 0%, 100% 0%, 50% 100%)", // Reversed triangle shape
                                    position: "absolute",
                                    top: "215px", // Adjust this value to position it correctly below the image and name
                                    marginLeft: "35px",
                                }}
                            >
                                {student.rank}
                            </h3>

                            {/* Student Batch */}
                            <p className="text-gray-500 font-medium mt-4">{student.batch}</p>

                            {/* Student Description */}
                            <p className="text-gray-700 mt-4">{student.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className="text-center mt-8">
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-full"
                    style={{
                        borderRadius: "50px",
                        background: "linear-gradient(276deg, #6F3199 -0.84%, #1ECBDB 100%)",
                    }}
                >
                    View All
                </button>
            </div>
        </div>
    );
};

// Custom Next and Previous arrow components
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="slick-arrow slick-next absolute top-1/2 right-[-70px] transform translate-y-1/2"
            onClick={onClick}
            style={{
                width: "45px", // Adjusted size
                height: "45px",
                flexShrink: 0,
                backgroundColor: "#FFF", // White fill
                borderRadius: "50%", // Circle shape
                border: "1px solid #9575CD", // Stroke style
                filter: "drop-shadow(0px 6px 15px rgba(0, 0, 0, 0.09))", // Drop shadow
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer", // Make sure it's clickable
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    color: "#9575CD", // Same color as circle stroke
                    fontSize: "28px",
                    marginRight: "22px",
                    marginBottom: "5px", // Adjust size of the arrow
                }}
            >
                &#62; {/* This is the '>' sign */}
            </span>
        </button>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="slick-arrow slick-prev absolute top-1/2 left-[-70px] transform translate-y-1/2"
            onClick={onClick}
            style={{
                width: "45px", // Adjusted size 
                height: "45px",
                flexShrink: 0,
                backgroundColor: "#FFF", // White fill
                borderRadius: "50%", // Circle shape
                border: "1px solid #9575CD", // Stroke style
                filter: "drop-shadow(0px 6px 15px rgba(0, 0, 0, 0.09))", // Drop shadow
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer", // Make sure it's clickable
                // zIndex: 1, // Ensure it's above the slider
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    color: "#9575CD", // Same color as circle stroke
                    fontSize: "30px",
                    marginRight: "22px",
                    marginBottom: "5px", // Adjust size of the arrow
                }}
            >
                &#60; {/* This is the '<' sign */}
            </span>
        </button>
    );
};

