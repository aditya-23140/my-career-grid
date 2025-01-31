"use client";

import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLinkedinIn,
  faPaperPlane,
  faBriefcase,
  faClipboardUser,
  faRobot,
  faLightbulb,
  faQuoteLeft,
  faChevronRight,
  faChevronLeft,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  // Toggle function
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Navbar isExpanded={isExpanded} toggleNavbar={toggleNavbar} />
      <section className="w-full frontSection">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                Manage Your Job Search with Ease
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-neutral-400 mb-4">
                Track applications, schedule interviews, and land your dream job
                with JobTrack - your personal job search assistant.
              </p>
            </div>
            <button className="font-semibold">
              <Link href="/">
                <div className="buttonLink">
                  <span>Get Started</span>
                  <FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
                </div>
              </Link>
            </button>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="frontSvg"
        width="100%"
      >
        <defs>
          <linearGradient id="gradient" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-stop)" />
            <stop offset="100%" stopColor="var(--color-bot)" />
          </linearGradient>
        </defs>
        <path
          fillOpacity="1"
          className="wave"
          d="M0,96L40,133.3C80,171,160,245,240,250.7C320,256,400,192,480,160C560,128,640,128,720,144C800,160,880,192,960,181.3C1040,171,1120,117,1200,106.7C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      {/**************************************************************************************************
                                            START THE ASSOCIATE SITES 
      ***************************************************************************************************/}
      {/* <section className="w-full supportedSites">
        <div className="container">
          <div className="row text-center">
            <h4 className="font-bold mb-3">Supported Sites</h4>
            <div className="headingLine mb-5"></div>
          </div>
        </div>
      </section> */}
      {/**************************************************************************************************
                                            START SECTION FOR SERVICES
      ***************************************************************************************************/}
      <section id="services" className="ourFeatures flex flex-col items-center">
        <div className="container mb-10">
          <div className="row text-center">
            <h1 className="font-bold">Our Features</h1>
            <div className="headingLine"></div>
          </div>
        </div>
        {/**************************************************************************************************
                                            START THE DESCRIPTION CONTENT
        ***************************************************************************************************/}
        <div className="featureContainer">
          {/* <div className="featureCard relative flex flex-col my-6 rounded-lg w-96">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <Image
                src="/assets/resume.jpeg"
                alt="card-Image"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-xl font-semibold">
                All-in-One Job Application Tracker
              </h6>
              <p className="leading-normal font-light">
                Easily manage and monitor all your job applications across
                platforms like LinkedIn. Stay updated with real-time statuses,
                deadlines, and progress timelines in one intuitive dashboard.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="font-semibold" type="button">
                <Link href="/">
                  <div className="buttonLink">
                    <span>Learn More</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrowIcon"
                    />
                  </div>
                </Link>
              </button>
            </div>
          </div>
          <div className="featureCard relative flex flex-col my-6 rounded-lg w-96">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <Image
                src="/assets/resume.jpeg"
                alt="card-Image"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2  text-xl font-semibold">
                Smart Resume Builder & Manager
              </h6>
              <p className=" leading-normal font-light">
                Create professional resumes using customizable templates or
                upload and store multiple versions. Keep your resumes organized
                and ready to send for any job opportunity.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="font-semibold" type="button">
                <Link href="/">
                  <div className="buttonLink">
                    <span>Learn More</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrowIcon"
                    />
                  </div>
                </Link>
              </button>
            </div>
          </div>
          <div className="featureCard relative flex flex-col my-6 rounded-lg w-96">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <Image
                src="/assets/resume.jpeg"
                alt="card-Image"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2  text-xl font-semibold">
                AI-Powered Job Recommendations
              </h6>
              <p className="leading-normal font-light">
                Get personalized job alerts based on your skills, preferences,
                and goals. Let AI find the best opportunities for you, ensuring
                you never miss out on your dream job.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="font-semibold" type="button">
                <Link href="/">
                  <div className="buttonLink">
                    <span>Learn More</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrowIcon"
                    />
                  </div>
                </Link>
              </button>
            </div>
          </div>
          <div className="featureCard relative flex flex-col my-6 rounded-lg w-96">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <Image
                src="/assets/resume.jpeg"
                alt="card-Image"
                layout="responsive"
                width={16}
                height={8}
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2  text-xl font-semibold">
                Insights & Productivity Tools
              </h6>
              <p className=" leading-normal font-light">
                Track your progress with detailed analytics and success metrics.
                Stay organized with integrated calendars, task reminders, and
                interview scheduling to boost your productivity.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="font-semibold" type="button">
                <Link href="/">
                  <div className="buttonLink">
                    <span>Learn More</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrowIcon"
                    />
                  </div>
                </Link>
              </button>
            </div>
          </div> */}
          <div className="row mt-8">
            <div className="service">
              <div className="services_content">
                <FontAwesomeIcon icon={faBriefcase} className="icon" />
                <h2 className="mb-2 lg:text-4xl text-3xl font-semibold">
                  All-in-One Job Application Tracker
                </h2>
                <p className="leading-normal lg:text-xl text-l font-light mb-4 text-gray-400">
                  Easily manage and monitor all your job applications across
                  platforms like LinkedIn. Stay updated with real-time statuses,
                  deadlines, and progress timelines in one intuitive dashboard.
                </p>
                <button className="font-semibold" type="button">
                  <Link href="/">
                    <div className="service_button">
                      <span>Learn More</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrowIcon"
                      />
                    </div>
                  </Link>
                </button>
              </div>
              <div className="illus">
                <div className="services_content">
                  <Image
                    src="/assets/job-track.png"
                    alt="job-tracker-vector"
                    responsive="true"
                    width={2000}
                    height={2000}
                    style={{ opacity: "0.8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-8">
            <div className="service">
              <div className="illus">
                <div className="services_content">
                  <Image
                    src="/assets/resume.png"
                    alt="job-tracker-vector"
                    responsive="true"
                    width={2000}
                    height={2000}
                    style={{ opacity: "0.8" }}
                  />
                </div>
              </div>
              <div className="services_content">
                <FontAwesomeIcon icon={faClipboardUser} className="icon" />
                <h2 className="mb-2 lg:text-4xl text-3xl font-semibold">
                  Smart Resume Builder & Manager
                </h2>
                <p className="leading-normal lg:text-xl text-l font-light mb-4 text-gray-400">
                  Create professional resumes using customizable templates or
                  upload and store multiple versions. Keep your resumes
                  organized and ready to send for any job opportunity.
                </p>
                <button className="font-semibold" type="button">
                  <Link href="/">
                    <div className="service_button">
                      <span>Learn More</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrowIcon"
                      />
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-8">
            <div className="service">
              <div className="services_content">
                <FontAwesomeIcon icon={faRobot} className="icon" />
                <h2 className="mb-2 lg:text-4xl text-3xl font-semibold">
                  AI-Powered Job Recommendations
                </h2>
                <p className="leading-normal lg:text-xl text-l font-light mb-4 text-gray-400">
                  Get personalized job alerts based on your skills, preferences,
                  and goals. Let AI find the best opportunities for you,
                  ensuring you never miss out on your dream job.
                </p>
                <button className="font-semibold" type="button">
                  <Link href="/">
                    <div className="service_button">
                      <span>Learn More</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrowIcon"
                      />
                    </div>
                  </Link>
                </button>
              </div>
              <div className="illus">
                <div className="services_content">
                  <Image
                    src="/assets/job-recommendation.png"
                    alt="job-tracker-vector"
                    responsive="true"
                    width={2000}
                    height={2000}
                    style={{ opacity: "0.8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-8">
            <div className="service">
              <div className="illus">
                <div className="services_content">
                  <Image
                    src="/assets/insightsProductivity.png"
                    alt="job-tracker-vector"
                    responsive="true"
                    width={2000}
                    height={2000}
                    style={{ opacity: "0.8" }}
                  />
                </div>
              </div>
              <div className="services_content">
                <FontAwesomeIcon icon={faLightbulb} className="icon" />
                <h2 className="mb-2 lg:text-4xl text-3xl font-semibold">
                  Insights & Productivity Tools
                </h2>
                <p className="leading-normal lg:text-xl text-l font-light mb-4 text-gray-400">
                  Track your progress with detailed analytics and success
                  metrics. Stay organized with integrated calendars, task
                  reminders, and interview scheduling to boost your
                  productivity.
                </p>
                <button className="font-semibold" type="button">
                  <Link href="/">
                    <div className="service_button">
                      <span>Learn More</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrowIcon"
                      />
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**************************************************************************************************
                                            START SECTION FOR TESTIMONIALS
      ***************************************************************************************************/}
      <section
        id="testemonials"
        className="testemonials flex flex-col items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="wave"
            fillOpacity="1"
            d="M0,192L40,202.7C80,213,160,235,240,224C320,213,400,171,480,170.7C560,171,640,213,720,240C800,267,880,277,960,261.3C1040,245,1120,203,1200,181.3C1280,160,1360,160,1400,160L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <div className="container">
          <div className="row text-center">
            <h1 className="font-bold">Testemonials</h1>
            <hr style={{ width: "100px", height: "3px" }} className="mx-auto" />
            <p className="lead pt-4">what our clients are saying</p>
          </div>
        </div>

        {/**************************************************************************************************
                                            Carousel 
        ***************************************************************************************************/}
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false} // Removes the dots
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={1000}
          stopOnHover={true}
          className="carousel-container"
          renderArrowPrev={(clickHandler, hasPrev) =>
            hasPrev && (
              <div className="absolute bottom-12 right-1/2 transform -translate-x-1 z-30 flex space-x-4">
                <button
                  onClick={clickHandler}
                  className="cursor-pointer group focus:outline-none"
                >
                  <span className="inline-flex items-center justify-center w-12 h-8 rounded bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <span className="sr-only">Previous</span>
                </button>
              </div>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <div className="absolute bottom-12 left-1/2 transform translate-x-1 z-30 flex space-x-4">
                <button
                  onClick={clickHandler}
                  className="cursor-pointer group focus:outline-none"
                >
                  <span className="inline-flex items-center justify-center w-12 h-8 rounded bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                  <span className="sr-only">Next</span>
                </button>
              </div>
            )
          }
        >
          {/* Client 1 */}
          <div className="carousel-slide">
            {/* Testemonials card */}
            <div className="testemonials_card">
              <div className="p">
                <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                explicabo magnam velit iste doloribus. Et qui atque laboriosam
                illum repudiandae! Aliquam?
                <FontAwesomeIcon className="icon" icon={faQuoteRight} />
                <div className="ratings mt-4">
                  <FontAwesomeIcon className="icon" icon={faStar} />
                  <FontAwesomeIcon className="icon" icon={faStar} />
                  <FontAwesomeIcon className="icon" icon={faStar} />
                  <FontAwesomeIcon className="icon" icon={faStar} />
                  <FontAwesomeIcon className="icon" icon={faStar} />
                </div>
              </div>
            </div>
            {/* client pic */}
            <div className="testemonials_picture">
              <Image
                src="/assets/profile.jpg"
                alt="profile"
                width={500}
                height={500}
                responsive="true"
                className="picture rounded-full"
              />
            </div>
            {/* client name and role */}
            <div className="testemonials_name">
              <h3>Gilgamesh</h3>
              <p className="lead ">King Of Uruk</p>
            </div>
          </div>
          {/* Client 2 */}
          <div className="carousel-slide">
            {/* Testemonials card */}
            <div className="testemonials_card">
              <div className="p">
                <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                explicabo magnam velit iste doloribus. Et qui atque laboriosam
                illum repudiandae! Aliquam?
                <FontAwesomeIcon className="icon" icon={faQuoteRight} />
                <div className="ratings mt-4">
                  <FontAwesomeIcon className="icon" icon={faStar} />
                  <FontAwesomeIcon className="icon" icon={faStar} />
                  <FontAwesomeIcon className="icon" icon={faStar} />
                  <FontAwesomeIcon className="icon" icon={faStar} />
                  <FontAwesomeIcon className="icon" icon={faStar} />
                </div>
              </div>
            </div>
            {/* client pic */}
            <div className="testemonials_picture">
              <Image
                src="/assets/profile.jpg"
                alt="profile"
                width={500}
                height={500}
                responsive="true"
                className="picture rounded-full"
              />
            </div>
            {/* client name and role */}
            <div className="testemonials_name">
              <h3>Gilgamesh</h3>
              <p className="lead ">King Of Uruk</p>
            </div>
          </div>
        </Carousel>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="wave"
            fillOpacity="1"
            d="M0,192L40,202.7C80,213,160,235,240,224C320,213,400,171,480,170.7C560,171,640,213,720,240C800,267,880,277,960,261.3C1040,245,1120,203,1200,181.3C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>
      {/**************************************************************************************************
                                            START Frequently Asked Questions
      ***************************************************************************************************/}

      <section id="faq" className="faq py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-uppercase mb-2">FAQ</h1>
            <div className="headingLine"></div>
            <p className="lead">
              Frequently asked questions, get knowledge beforehand
            </p>
          </div>
          {/* Accordion Content */}
          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-4">
              <button
                type="button"
                onClick={() => toggleAccordion(1)}
                className={`flex items-center justify-between w-full p-6 text-left font-semibold transition-all duration-200 acordion ${
                  openItem === 1
                    ? "opened rounded-t-xl"
                    : "rounded-lg acordionShadow"
                }`}
              >
                <span>What is MyCareerGrid?</span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    openItem === 1 ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openItem === 1 && (
                <div className="p-6 content border-t-0 rounded-b-lg acordionShadow">
                  <p>
                    MyCareerGrid helps you manage your job applications and
                    resumes for various positions across different companies.
                    You can upload, update, and tailor your resume for specific
                    job openings, track your application status, and receive
                    updates on new opportunities.
                  </p>
                  <p className="mt-2">
                    Check out this guide to learn how to{" "}
                    <Link
                      href="/docs/getting-started/introduction/"
                      className="text-blue-400 hover:underline"
                    >
                      get started
                    </Link>{" "}
                    and start managing your resume and job application to become
                    efficient while searching for jobs.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="mb-4">
              <button
                type="button"
                onClick={() => toggleAccordion(2)}
                className={`flex items-center justify-between w-full p-6 text-left font-semibold transition-all duration-200 acordion ${
                  openItem === 2
                    ? "opened rounded-t-xl"
                    : "rounded-lg acordionShadow"
                }`}
              >
                <span>Can I track the status of my applications?</span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    openItem === 2 ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openItem === 2 && (
                <div className="p-6 content border-t-0 rounded-b-lg acordionShadow">
                  <p>
                    Yes, you can track the status of all your applications in
                    the &quot;Applications&quot; section of your account.
                    You&apos;ll see whether your application is under review,
                    shortlisted, or rejected.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="mb-4">
              <button
                type="button"
                onClick={() => toggleAccordion(3)}
                className={`flex items-center justify-between w-full p-6 text-left font-semibold transition-all duration-200 acordion ${
                  openItem === 3
                    ? "opened rounded-t-xl"
                    : "rounded-lg acordionShadow"
                }`}
              >
                <span>How do I set up job alerts?</span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    openItem === 3 ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openItem === 3 && (
                <div className="p-6 content border-t-0 rounded-b-lg acordionShadow">
                  <p>
                    Go to the &quot;Job Alerts&quot; section and set your
                    preferences (e.g., job title, location, industry).
                    You&apos;ll receive email notifications when new jobs
                    matching your criteria are posted.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="mb-4">
              <button
                type="button"
                onClick={() => toggleAccordion(4)}
                className={`flex items-center justify-between w-full p-6 text-left font-semibold transition-all duration-200 acordion ${
                  openItem === 4
                    ? "opened rounded-t-xl"
                    : "rounded-lg acordionShadow"
                }`}
              >
                <span>How do I upload and manage my resume?</span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    openItem === 4 ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openItem === 4 && (
                <div className="p-6 content border-t-0 rounded-b-lg acordionShadow">
                  <p>
                    Go to the &quot;Resume&quot; section in your account to
                    upload a file (PDF, DOC, or DOCX) or create a new resume
                    using our resume builder. You can save multiple resumes and
                    tailor them for different job applications.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/**************************************************************************************************
                                            START GET STARTED SECTION
      ***************************************************************************************************/}

      <section
        id="contact"
        className="getStarted bg-blue-100 dark:bg-neutral-800"
      >
        <div className="container m-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-uppercase mb-4">
              Get Started
            </h1>
            <div className="headingLine"></div>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              non eveniet a?
            </p>
          </div>

          <div className="getStartedRow text-white w-full mb-12">
            <div className="gradient shadow-lg">
              <div className="cta-info w-100">
                <h4 className="font-bold text-5xl leading-tight">
                  100% Satisfaction Guaranteed
                </h4>
                <p className="mb-2 font-light leading-6 lead">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt quam quasi earum rem sint, dolore temporibus
                  praesentium maxime molestias vel?
                </p>
                <h3 className="font-medium text-3xl">
                  What will be the next step?
                </h3>
                <ul className="cta-info_list">
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row shadow-lg form">
              <div className="w-full pb-2">
                <h4 className="mb-10 gradient-text text-3xl font-medium text-uppercase">
                  Start Your Project
                </h4>
                <form action="#" className="row">
                  <div className="flex lg:flex-row flex-col justify-between w-full">
                    <div className="lg:mr-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        id="inputFirstName"
                        className="form-control w-full mb-4"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        id="inputLastName"
                        className="form-control w-full mb-4"
                      />
                    </div>
                  </div>
                  <div className="mb-4 text-center">
                    <input
                      type="email"
                      placeholder="Email Address"
                      id="inputEmail"
                      className="form-control w-full"
                    />
                  </div>
                  <div className="mb-4 text-center">
                    <textarea
                      name="message"
                      id="message"
                      rows={8}
                      placeholder="Message"
                      className="form-control w-full"
                    ></textarea>
                  </div>
                  <div className="text-center mt-1">
                    <button className="font-semibold formSubmit" type="button">
                      <Link href="/">
                        <div>
                          <span>Submit</span>
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="ml-2"
                          />
                        </div>
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**************************************************************************************************
                                            START Footer SECTION
      ***************************************************************************************************/}
      <section id="footer" className="flex flex-col items-center"></section>
    </>
  );
}
