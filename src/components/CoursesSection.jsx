import React from "react";
import personalBrandingImg from "../assets/personalBrandingImg.jpg";
import contentWritingImg from "../assets/contentWritingImg.jpg";
import socialMediaImg from "../assets/socialMediaImg.jpg";
import productDesignImg from "../assets/productDesignImg.jpg";
import web3Img from "../assets/web3Img.jpg";
import aiImg from "../assets/aiImg.jpg";
import dataScienceImg from "../assets/dataScienceImg.jpg";
import cybersecurityImg from "../assets/cybersecurityImg.jpg";

const courses = [
  { title: "Personal Branding (Free)", img: personalBrandingImg, info: "Build your personal brand, online presence, CV, and professional positioning." },
  { title: "Content Writing & SEO", img: contentWritingImg, info: "Learn persuasive writing and SEO strategies that drive traffic and conversions." },
  { title: "Social Media Management", img: socialMediaImg, info: "Master content planning, analytics, growth strategies, and brand storytelling." },
  { title: "Product Design", img: productDesignImg, info: "Design user-centered digital products using modern tools and frameworks." },
  { title: "Web 3.0", img: web3Img, info: "Understand blockchain, decentralized systems, and future-ready internet technologies." },
  { title: "AI & Machine Learning", img: aiImg, info: "Learn intelligent systems, automation, and real-world AI applications." },
  { title: "Data Science", img: dataScienceImg, info: "Analyze data, uncover insights, and make data-driven business decisions." },
  { title: "Cybersecurity", img: cybersecurityImg, info: "Protect digital systems, manage threats, and secure online infrastructures." },
];

const CoursesSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-14 bg-black-light">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Course Categories
        </h2>
        <p className="mt-4 text-white/90 text-lg md:text-xl">
          Explore our courses and see what you can learn to boost your career.
        </p>
      </div>

      <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-4 snap-x snap-mandatory md:snap-none scrollbar-hide">
        {courses.map((course, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 md:flex-shrink relative bg-white border border-black/10 rounded-3xl shadow-card flex flex-col items-center p-6 w-72 md:w-auto"
          >
            <img
              src={course.img}
              alt={course.title}
              loading="lazy"
              className="w-full h-40 md:h-48 object-cover rounded-2xl mb-4"
            />

            <h3 className="text-black font-semibold text-xl text-center mb-2">
              {course.title}
            </h3>

            <p className="text-black/70 text-sm md:text-base text-center mb-4">
              {course.info}
            </p>

            <button className="mt-auto w-full bg-brand-light text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand transition-colors">
              View Course
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
