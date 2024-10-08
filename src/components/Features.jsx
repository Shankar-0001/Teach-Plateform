import React from "react";

const Features = () => {
  const features = [
    {
      image: "/Video.png", // Replace with the actual path to your image
      title: "Daily Live/Recorded Lecture",
      description: "Aggregated Classes",
    },
    {
      image: "/BookBookmark.png", // Replace with the actual path to your image
      title: "Unlimited Access to Free Library",
      description: "Videos, DPP, and Notes",
    },
    {
      image: "/Student.png", // Replace with the actual path to your image
      title: "Top Paramedical Contents",
      description: "Entrusted with Lakh’s of Student’s",
    },
    {
      image: "/Headset.png", // Replace with the actual path to your image
      title: "24×7 Support",
      description: "Doubt Solving Sessions",
    },
  ];

  return (
    <div className="container mx-auto max-w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-around">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg text-center  flex flex-col items-center justify-center
                   w-full h-22 md:w-72 md:h-25 lg:w-[18rem] lg:h-[11rem]"
          >
            <div className="bg-white rounded-full p-3 md:p-2 lg:p-3 mb-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10"
              />
            </div>
            <h3 className="text-xs sm:text-sm md:text-md lg:text-md font-semibold whitespace-nowrap">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-md lg:text-md font-semibold whitespace-nowrap text-gray-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
