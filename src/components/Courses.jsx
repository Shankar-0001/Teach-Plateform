import React, { useState } from "react";

// Dummy course data
const initialCourses = [
  {
    id: 1,
    title: "Lab Foundation 3.0",
    price: "₹6100",
    oldPrice: "₹6500",
    discount: "25% OFF",
    description:
      "Mauris aliquet nisi non cursus tincidunt eleifend tincidunt nunc feugiat loremsd lifhausld gvv,j asldi ulaiwgbvlasiudtv liagsdvkjzx.",
    lectures: "500+",
    handNotes: "500+",
    dpp: "40+",
    liveTest: "Live Test",
    author: "Chandan Mlt",
    rating: 5,
    image: "/rp1.png",
    authorImage: "/author.png", // Author image added here
  },
  {
    id: 2,
    title: "Microbiology Batch",
    price: "₹2900",
    oldPrice: "₹3300",
    discount: "15% OFF",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip aoisdyv oa oai sydvligev ai wydvliqgw.ev iscing elit.",
    lectures: "175+",
    handNotes: "Lecture Notes",
    dpp: "DPP",
    liveTest: "Live Test",
    author: "Chandan Mlt",
    rating: 5,
    image: "/rp2.png",
    authorImage: "/author.png", // Author image added here
  },
  {
    id: 3,
    title: "Anatomy Batch",
    price: "₹2100",
    oldPrice: "₹2800",
    discount: "40% OFF",
    description:
      "Vestibulum ultrices elit nulla eleifend eu vulputate lectus vehicula.",
    lectures: "50+",
    handNotes: "45+",
    dpp: "Live Test",
    liveTest: "Live Test",
    author: "Chandan Mlt",
    rating: 4,
    image: "/rp3.png",
    authorImage: "/author.png", // Author image added here
  },
  // Additional courses for example
  {
    id: 4,
    title: "Microbiology Batch",
    price: "₹2900",
    oldPrice: "₹3300",
    discount: "15% OFF",
    description:
      "Lorem ipsum dolor sit am asodibv ev las vd p;iqwe ao;sidvy ;ioqwev et, consectetur adipiscing elit.",
    lectures: "175+",
    handNotes: "Lecture Notes",
    dpp: "DPP",
    liveTest: "Live Test",
    author: "Chandan Mlt",
    rating: 5,
    image: "/rp4.png",
    authorImage: "/author.png", // Author image added here
  },
  {
    id: 5,
    title: "Anatomy Batch",
    price: "₹2100",
    oldPrice: "₹2800",
    discount: "30% OFF",
    description:
      "Vestibulum ultrices elit nulla eleifend eu vulputate lectus vehicula.",
    lectures: "50+",
    handNotes: "45+",
    dpp: "Live Test",
    liveTest: "Live Test",
    author: "Chandan Mlt",
    rating: 4,
    image: "/rp5.png",
    authorImage: "/author.png", // Author image added here
  },
  {
    id: 6,
    title: "Anatomy Batch",
    price: "₹2100",
    oldPrice: "₹2800",
    discount: "40% OFF",
    description:
      "Vestibulum ultrices elit nulla eleifend eu vulputate lectus vehicula.",
    lectures: "50+",
    handNotes: "45+",
    dpp: "Live Test",
    liveTest: "Live Test",
    author: "Chandan Mlt",
    rating: 4,
    image: "/rp6.png",
    authorImage: "/author.png", // Author image added here
  },
  {
    id: 7,
    title: "Anatomy Batch",
    price: "₹2100",
    oldPrice: "₹2800",
    discount: "40% OFF",
    description:
      "Vestibulum ultrices elit nulla eleifend eu vulputate lectus vehicula.",
    lectures: "50+",
    handNotes: "45+",
    dpp: "Live Test",
    liveTest: "Live Test",
    author: "Chandan Mlt",
    rating: 4,
    image: "/rp1.png",
    authorImage: "/author.png", // Author image added here
  },
  {
    id: 8,
    title: "Anatomy Batch",
    price: "₹2100",
    oldPrice: "₹2800",
    discount: "40% OFF",
    description:
      "Vestibulum ultrices elit nulla eleifend eu vulputate lectus vehicula.",
    lectures: "50+",
    handNotes: "45+",
    dpp: "Live Test",
    liveTest: "Live Test",
    author: "Chandan Mlt",
    rating: 4,
    image: "/rp2.png",
    authorImage: "/author.png", // Author image added here
  },
];

const Courses = () => {
  const [visibleCourses, setVisibleCourses] = useState(6);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setVisibleCourses(showMore ? 6 : initialCourses.length);
  };

  const renderStars = (rating) => {
    const fullStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return (
      <>
        <span className="text-yellow-500">{fullStars}</span>
        <span className="text-gray-300">{emptyStars}</span>
      </>
    );
  };

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold text-center mb-4 text-customTextColor">
          Courses Available
        </h1>

        <div className="w-[60px] h-0 border-t-2 border-customTextColor mx-auto opacity-100"></div>

        <p className="text-center text-gray-500 mt-4 mb-6">
          RankPlus is Nurturing Students for 20+ Competitive Exams. Explore your
          Way of Learning.
        </p>
      </div>
      <div className="container mx-auto space-x-10 max-w-7xl ">

        {/* Grid Layout with responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ml-10 mr-10 ">
          {initialCourses.slice(0, visibleCourses).map((course) => (
            <div key={course.id} className="border rounded-lg  shadow-lg">
              {/* Course Image */}
              <div className="relative mt-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
              </div>

              {/* Course Info */}
              <div className="mt-4 p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={course.authorImage}
                      alt={course.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-bold text-gray-700">
                      {course.author}
                    </span>
                  </div>
                  <div>{renderStars(course.rating)}</div>
                </div>

                <h2 className="font-bold text-lg mt-2 text-left">
                  {course.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1 text-left line-clamp-2">
                  {course.description}
                </p>

                {/* Course Details */}
                <div className="flex mt-4 space-x-4 text-sm">
                  <span>{course.lectures} Lectures</span>
                  <span>{course.handNotes} Hand Notes</span>
                  <span>{course.dpp} DPP</span>
                  <span>{course.liveTest}</span>
                </div>

                {/* Horizontal Line */}
                <div className="border-t border-gray-300 my-4"></div>

                {/* Pricing and Buttons */}
                <div className="flex justify-between items-center mt-4">
                  {/* Pricing Section */}
                  <div className="flex items-center gap-3">
                    {/* Discount Circle */}
                    <div className="bg-customPurple text-white rounded-full w-12 h-12 flex flex-col justify-center items-center">
                      <span className="text-sm font-bold">{course.discount}</span>
                    </div>

                    {/* Price Details */}
                    <div className="flex flex-col">
                      {/* Old Price (Crossed Out) */}
                      <div className="text-gray-500 line-through text-base">
                        {course.oldPrice}
                      </div>
                      {/* Discounted Price */}
                      <div className="text-xl font-bold text-purple-900">
                        {course.price}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {/* Explore Now Button */}
                    <button className="bg-cyan-100 text-cyan-600 px-2 py-2 text-base rounded-full font-semibold">
                      Explore Now
                    </button>

                    {/* Buy Now Button */}
                    <button className="bg-purple-100 text-customPurple px-2 py-2 text-base rounded-full font-semibold">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      {/* Show More Button */}
      <div className="text-center mt-6">
        <button
          className="bg-gradient-to-r from-teal-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          onClick={handleShowMore}
        >
          {showMore ? "View Less" : "View All Courses"}
        </button>
      </div>
    </div>
  );
};

export default Courses;
