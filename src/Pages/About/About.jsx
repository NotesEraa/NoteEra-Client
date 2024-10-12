import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../PremiumModules/components/Header/Header";
import Footer from "../PremiumModules/components/Footer/Footer";
export default function About() {
  const [sectionInView, setSectionInView] = useState(false);

  // const [showPopup, setShowPopup] = useState(false);
  // const openInNewTab = (url) => {
  //   window.open(url, "_blank", "noreferrer");
  // };
  // useEffect(() => {
  //   // Function to show the popup after a delay
  //   const showPopupAfterDelay = () => {
  //     setTimeout(() => {
  //       setShowPopup(true);
  //     }, 10000); 10 seconds delay (10000 milliseconds)
  //   };

  //   // Call the function to start the countdown when the component mounts
  //   showPopupAfterDelay();
  // }, []);

  // // Function to close the popup
  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          sectionObserver.unobserve(entry.target);
        }
      });
    });

    const sectionElement = document.querySelector(".counter_section");
    if (sectionElement) {
      sectionObserver.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        sectionObserver.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <>
      {/* <!-- Body Wrap - Start --> */}
      <div className="page_wrapper">
        {/* <!-- Back To Top - Start --> */}
        <div className="backtotop">
          <a href="/" className="scroll">
            <i className="far fa-arrow-up"></i>
          </a>
        </div>
        {/* <!-- Back To Top - End -->

        <!-- Site Header - Start
          ================================================== --> */}
        <Header/>

        {/* <!-- Site Header - End
          ================================================== -->*/}
        {/*<!-- Main Body - Start
          ================================================== -->*/}
        <main className="page_content">
          {/*<!-- Banner Section - Start
            ================================================== --> */}
            <section className="hero_banner style_1">

              <div className="container">
                <div className="content_wrap">
                  <div className="row">
                    <div className="col col-lg-7">
                      <h2 className="banner_big_title">
                        Welcome to Notesera 
                      </h2>
                      <p className="banner_description">
                        <strong>About Notes-Era</strong> – Notesera is a community platform  for All
                        Educational Note Requirements Online. At Notes-Era, we
                        understand the importance of quality educational resources
                        in your learning journey. Our platform offers a
                        comprehensive collection of notes, study materials,video lectures and
                        resources to cater to the diverse needs of students and
                        learners.
                      </p>
                      <ul className="banner_btns_group unordered_list">
                        <li>
                          <Link to="/courses" className="btn btn_primary">
                            <span>
                              <small>Explore Notes</small>
                              <small>Explore Notes</small>
                            </span>
                          </Link>
                        </li>
                        <li>
                        <a
                          className="btn btn_premium"
                          href="/"
                        >
                          <span>
                            <small> Premium Notes</small>
                            <small> Premium Notes</small>
                          </span>
                        </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col col-lg-5">
                      <div className="banner_image_1 decoration_wrap">
                        
                          <div className="image_wrap">
                            <img
                              src="Assets2/banner.png"
                              alt="Notes-Era – Online Learning Platform"
                            />
                          </div>
                        <div
                          className="deco_item shape_img_1"
                          data-parallax='{"y" : -130, "smoothness": 6}'
                        >
                          <img
                            src="assets/images/shape/shape_img_1.png"
                            alt="Notes-Era – Online Learning Platform"
                          />
                        </div>
                        <div
                          className="deco_item shape_img_2"
                          data-parallax='{"y" : 160, "smoothness": 6}'
                        >
                          <img
                            src="assets/images/shape/shape_img_2.png"
                            alt="Notes-Era – Online Learning Platform"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          {/* <!-- Banner Section - End
            ================================================== -->

          <!-- Expect From Course - Start
            ================================================== --> */}
          <section className="expect_from_course section_space_lg">
            <div className="container">
              <div className="row">
                <div className="col col-lg-6">
                  <div className="section_heading">
                    <h2 className="heading_text">
                      Anticipate the Offerings of Notes-Era.
                    </h2>
                    <p className="heading_description mb-0">
                      Discover a treasure trove of educational resources at
                      Notes-Era. Elevate your learning journey with a diverse
                      range of notes, papers, and more.
                    </p>
                  </div>

                  <div
                    className="image_widget"
                    style={{ boxShadow: "10px 10px 0 #af6bed" }}
                  >
                    <img
                      src="Assets2/about_image_1.jpg"
                      alt="NotesEra – Online Learning Platform"
                    />
                  </div>
                </div>
                <div className="col col-lg-6">
                  {/* <!-- Button will hide on Mobile Device --> */}
                  <div className="btn_wrap pt-0 d-none d-lg-flex justify-content-end"></div>

                  <div className="row">
                    <div className="col col-md-6">
                      <div className="service_item" data-magnetic>
                        <div className="item_icon">
                          <img
                            src="assets/images/service/icon_academic_cap.svg"
                            alt="NotesEra – Online Learning Platform"
                          />
                        </div>
                        <div className="item_content">
                          <h3 className="item_title">Notes</h3>
                          <p className="mb-0">
                            Notes-Era offers comprehensive educational notes,
                            catering to a wide spectrum of subjects and academic
                            levels.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="service_item" data-magnetic>
                        <div className="item_icon">
                          <img
                            src="assets/images/service/icon_physics.svg"
                            alt="NotesEra – Online Learning Platform"
                          />
                        </div>
                        <div className="item_content">
                          <h3 className="item_title">Assignments</h3>
                          <p className="mb-0">
                            Explore a diverse range of assignment resources and
                            guidelines on Notes-Era, enhancing your academic
                            excellence.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="service_item" data-magnetic>
                        <div className="item_icon">
                          <img
                            src="assets/images/service/icon_communication.svg"
                            alt="NotesEra – Online Learning Platform"
                          />
                        </div>
                        <div className="item_content">
                          <h3 className="item_title">Exam Papers</h3>
                          <p className="mb-0">
                            Access a wide range of Exam Papers (PYQ) to excel in
                            your preparations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="service_item" data-magnetic>
                        <div className="item_icon">
                          <img
                            src="assets/images/service/icon_diploma.svg"
                            alt="Notes-Era – Online Learning Platform"
                          />
                        </div>
                        <div className="item_content">
                          <h3 className="item_title">A certificate</h3>
                          <p className="mb-0">
                            Get certified upon completion for academic Course
                            with our recognized certificates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Button will show on Mobile Device --> */}
                  <div className="btn_wrap pb-0 d-block d-lg-none text-center">
                    <a className="btn border_dark" href="/courses">
                      <span>
                        <small>Explore Notes</small>
                        <small>Explore Notes</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Expect From Course - End
            ================================================== -->

          <!-- Counter Section - Start
            ================================================== --> */}
          <section className="counter_section bg_light section_space_md">
            <div
              className={`container ${sectionInView ? "animate-counters" : ""}`}
            >
              <div className="row">
                <div className="col col-lg-3 col-md-6">
                  <InView>
                    {({ inView, ref }) => (
                      <div className="counter_item" ref={ref}>
                        <h3 className="counter_value">
                          {inView ? (
                            <CountUp start={0} end={500} duration={2} />
                          ) : (
                            <span className="counter_value_text">0</span>
                          )}
                          <span>+</span>
                        </h3>
                        <p className="mb-0">
                          Hours of hands-on learning in our courses
                        </p>
                      </div>
                    )}
                  </InView>
                </div>

                <div className="col col-lg-3 col-md-6">
                  <InView>
                    {({ inView, ref }) => (
                      <div className="counter_item" ref={ref}>
                        <h3 className="counter_value">
                          {inView ? (
                            <CountUp start={0} end={4200} duration={2} />
                          ) : (
                            <span className="counter_value_text">0</span>
                          )}
                          <span>+</span>
                        </h3>
                        <p className="mb-0">
                          students excelled academically due to our Notes.
                        </p>
                      </div>
                    )}
                  </InView>
                </div>

                <div className="col col-lg-3 col-md-6">
                  <InView>
                    {({ inView, ref }) => (
                      <div className="counter_item" ref={ref}>
                        <h3 className="counter_value">
                          {inView ? (
                            <CountUp start={0} end={150} duration={2} />
                          ) : (
                            <span className="counter_value_text">0</span>
                          )}
                          <span>+</span>
                        </h3>
                        <p className="mb-0">
                          Courses are covered by Notes-Era comprehensively.
                        </p>
                      </div>
                    )}
                  </InView>
                </div>

                <div className="col col-lg-3 col-md-6">
                  <InView>
                    {({ inView, ref }) => (
                      <div className="counter_item" ref={ref}>
                        <h3 className="counter_value">
                          {inView ? (
                            <CountUp start={0} end={150} duration={2} />
                          ) : (
                            <span className="counter_value_text">0</span>
                          )}
                          <span>+</span>
                        </h3>
                        <p className="mb-0">
                          Professionals guide and support you through the
                          journey.
                        </p>
                      </div>
                    )}
                  </InView>
                </div>
              </div>
            </div>
          </section>
          {
            
            
             <section className="courses_section section_space_lg">
               <div className="container">
                 <div className="section_heading">
                   <div className="row align-items-center justify-content-center">
                     <div className="col col-lg-6">
                       <h2 className="heading_text mb-0">
                         Introducing Our Dedicated Team
                       </h2>
                     </div>
                  </div>
                </div>
                <div className="tabs_wrapper">
                  <ul className="nav" role="tablist">
                    <li role="presentation">
                      <button className="active" data-bs-toggle="tab" data-bs-target="#teb_hr" type="button" role="tab"
                        aria-selected="true">
                        <i className="fas fa-users"></i>
                        <span>Core Team</span>
                      </button>
                    </li>
                    <li role="presentation">
                      <button data-bs-toggle="tab" data-bs-target="#teb_photography" type="button" role="tab"
                        aria-selected="false">
                        <i className="fas fa-camera"></i>
                        <span>Technicals</span>
                      </button>
                    </li>
                    <li role="presentation">
                      <button data-bs-toggle="tab" data-bs-target="#teb_database" type="button" role="tab"
                        aria-selected="false">
                        <i className="fas fa-database"></i>
                        <span>Database</span>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="teb_hr" role="tabpanel">
                      <div className="row">
                        <div className="col col-lg-5">
                          <div className="course_card">
                            <div className="item_image">
                              <a href="https://instagram.com/ayushsaxena_29?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
                                data-cursor-text="View">
                                <img src="Assets2/Ayush_Saxena.jpg" alt="NotesEra – Online Learning Platform" />
                              </a>
                            </div>
                            <div className="item_content">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <ul className="item_category_list unordered_list">
                                  <li><a href="#!">UI/UX developer</a></li>
                                </ul>
                                <div className="item_price">
                                  <span className="sale_price">4th Year</span>
                                </div>
                              </div>
                              <ul className="meta_info_list unordered_list">
                                <li>
                                  <i className="fas fa-chart-bar"></i>
                                  <span>Originator</span>
                                </li>
                                <li>
                                  <i className="fas fa-clock"></i>
                                  <span>Optimism</span>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                  <span>Visionary</span>
                                </li>
                              </ul>
                              <h3 className="item_title">
                                <a href="https://instagram.com/ayushsaxena_29?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
                                  Ayush Saxena
                                </a>
                              </h3>
                              <a className="btn_unfill" href="https://www.linkedin.com/in/ayush-saxena-3684b2218/">
                                <span className="btn_text">LinkedIn</span>
                                <span className="btn_icon">
                                  <i className="fas fa-long-arrow-right"></i>
                                  <i className="fas fa-long-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col col-lg-5">
                          <div className="course_card">
                            <div className="item_image">
                              <a href="Add Link"
                                data-cursor-text="View">
                                <img src="Assets2/Itish_Jain.jpg" alt="NotesEra – Online Learning Platform" />
                              </a>
                            </div>
                            <div className="item_content">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <ul className="item_category_list unordered_list">
                                  <li><a href="#!">Software Developer</a></li>
                                </ul>
                                <div className="item_price">
                                  <span className="sale_price">4th Year</span>
                                </div>
                              </div>
                              <ul className="meta_info_list unordered_list">
                                <li>
                                  <i className="fas fa-chart-bar"></i>
                                  <span>Enthusiasm</span>
                                </li>
                                <li>
                                  <i className="fas fa-clock"></i>
                                  <span>Innovative</span>
                                </li>
                              </ul>
                              <h3 className="item_title">
                                <a href="https://www.linkedin.com/in/itish-jain-a3479822a/">
                                  Itish Jain
                                </a>
                              </h3>
                              <a className="btn_unfill"
                                href="https://www.linkedin.com/in/itish-jain-a3479822a/">
                                <span className="btn_text">Linkedin</span>
                                <span className="btn_icon">
                                  <i className="fas fa-long-arrow-right"></i>
                                  <i className="fas fa-long-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="teb_photography" role="tabpanel">
                      <div className="row">
                      <div className="col col-lg-5">
                          <div className="course_card">
                            <div className="item_image">
                              <a href="https://www.linkedin.com/in/sanskarsoni9/" data-cursor-text="View">
                                <img src="Assets2/Sanskar_Soni.jpg" alt="NotesEra – Online Learning Platform" />
                              </a>
                            </div>
                            <div className="item_content">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <ul className="item_category_list unordered_list">
                                  <li><a href="#!">Full Stack  MERN Developer</a></li>
                                </ul>
                                <div className="item_price">
                                  <span className="sale_price">4th Year</span>
                                </div>
                              </div>
                              <ul className="meta_info_list unordered_list">
                                <li>
                                  <i className="fas fa-chart-bar"></i>
                                  <span>Technology</span>
                                </li>
                                <li>
                                  <i className="fas fa-clock"></i>
                                  <span>Development</span>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                  <span>Liberated</span>
                                </li>
                              </ul>
                              <h3 className="item_title">
                                <a href="https://www.linkedin.com/in/arth-gupta-a85b4a210/">
                                  Sanskar Soni
                                </a>
                              </h3>
                              <a className="btn_unfill" href="https://www.linkedin.com/in/sanskarsoni9/">
                                <span className="btn_text">LinkedIn</span>
                                <span className="btn_icon">
                                  <i className="fas fa-long-arrow-right"></i>
                                  <i className="fas fa-long-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col col-lg-5">
                          <div className="course_card">
                            <div className="item_image">
                              <a href="https://www.linkedin.com/in/sujal-soni/" data-cursor-text="View">
                                <img src="Assets2/Sujal_Soni.jpg" alt="NotesEra – Online Learning Platform" />
                              </a>
                            </div>
                            <div className="item_content">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <ul className="item_category_list unordered_list">
                                  <li><a href="#!">Full Stack  MERN Developer</a></li>
                                </ul>
                                <div className="item_price">
                                  <span className="sale_price">4th Year</span>
                                </div>
                              </div>
                              <ul className="meta_info_list unordered_list">
                                <li>
                                  <i className="fas fa-chart-bar"></i>
                                  <span>Technology</span>
                                </li>
                                <li>
                                  <i className="fas fa-clock"></i>
                                  <span>Future</span>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                  <span>Enrichment</span>
                                </li>
                              </ul>
                              <h3 className="item_title">
                                <a href="https://www.linkedin.com/in/sujal-soni/">
                                Sujal Soni
                                </a>
                              </h3>
                              <a className="btn_unfill" href="https://www.linkedin.com/in/sujal-soni/">
                                <span className="btn_text">LinkedIn</span>
                                <span className="btn_icon">
                                  <i className="fas fa-long-arrow-right"></i>
                                  <i className="fas fa-long-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="tab-pane fade" id="teb_database" role="tabpanel">
                      <div className="row">
                        { <div className="col col-lg-4">
                          <div className="course_card">
                            <div className="item_image">
                              <a href="https://instagram.com/mr_singh_jiii?igshid=MmU2YjMzNjRlOQ==" data-cursor-text="View">
                                <img src="Assets2/Kulvinder_Singh.jpg" alt="NotesEra – Online Learning Platform" />
                              </a>
                            </div>
                            <div className="item_content">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <ul className="item_category_list unordered_list">
                                  <li><a href="#!">Database Lead</a></li>
                                </ul>
                                <div className="item_price">
                                  <span className="sale_price">4th Year</span>
                                </div>
                              </div>
                              <ul className="meta_info_list unordered_list">
                                <li>
                                  <i className="fas fa-chart-bar"></i>
                                  <span>Productivity</span>
                                </li>
                                <li>
                                  <i className="fas fa-clock"></i>
                                  <span>Organized</span>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                  <span>Structured</span>
                                </li>
                              </ul>
                              <h3 className="item_title">
                                <a href="https://instagram.com/mr_singh_jiii?igshid=MmU2YjMzNjRlOQ==">
                                  Kulvinder Singh
                                </a>
                              </h3>
                              <a className="btn_unfill" href="https://instagram.com/mr_singh_jiii?igshid=MmU2YjMzNjRlOQ==">
                                <span className="btn_text">Instagram</span>
                                <span className="btn_icon">
                                  <i className="fas fa-long-arrow-right"></i>
                                  <i className="fas fa-long-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div> }
                        { <div className="col col-lg-4">
                          <div className="course_card">
                            <div className="item_image">
                              <a href="https://www.instagram.com/aditii_003/" data-cursor-text="View">
                                <img src="Assets2/Aditi_Dalal.jpg" alt="NotesEra – Online Learning Platform" />
                              </a>
                            </div>
                            <div className="item_content">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <ul className="item_category_list unordered_list">
                                  <li><a href="#!">Database Lead</a></li>
                                </ul>
                                <div className="item_price">
                                  <span className="sale_price">4th Year</span>
                                </div>
                              </div>
                              <ul className="meta_info_list unordered_list">
                                <li>
                                  <i className="fas fa-chart-bar"></i>
                                  <span>Productivity</span>
                                </li>
                                <li>
                                  <i className="fas fa-clock"></i>
                                  <span>Organized</span>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                  <span>Structured</span>
                                </li>
                              </ul>
                              <h3 className="item_title">
                                <a href="https://www.instagram.com/aditii_003/">
                                  Aditi Dalal
                                </a>
                              </h3>
                              <a className="btn_unfill" href="https://www.instagram.com/aditii_003/">
                                <span className="btn_text">Instagram</span>
                                <span className="btn_icon">
                                  <i className="fas fa-long-arrow-right"></i>
                                  <i className="fas fa-long-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div> }
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </section>
          }
          {/* <!-- Courses Section - End
            ================================================== -->

          <!-- Advertisement Section - Start
            ================================================== --> */}
          <section className="advertisement_section bg-light">
            <div
              className="container"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <div className="row align-items-center">
                <div className="col col-lg-6">
                  <div className="section_heading mb-lg-0">
                    <h2
                      className="heading_text"
                      style={{ textAlign: "left" }}
                    >
                      Take the Next Step Toward Your Personal and Professional
                      Goals
                    </h2>
                    <p className="heading_description mb-0 ">
                      Embark on a journey towards achieving your aspirations,
                      both personal and professional, by accessing our valuable
                      resources and courses. Your success story begins with us.
                      Unlock your potential today.
                    </p>
                    <div className="btn_wrap pb-0">
                      <a className="btn btn_primary" href="/courses">
                        <span>
                          <small>Explore Notes</small>
                          <small>Explore Notes</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Advertisement Section - End
            ================================================== -->

          <!-- Courses Info Section - Start
            ================================================== --> */}
          <section className="courses_info_section section_space_lg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col col-lg-6">
                  <div className="image_widget">
                    <img
                      src="Assets2/about_image_2.jpeg"
                      alt="NotesEra – Online Learning Platform"
                      loading="lazy"
                    />
                    {/* Assets2/young-attractive-smiling-student.jpg */}
                  </div>
                </div>
                <div className="col col-lg-6">
                  <div className="content_wrap ps-lg-3">
                    <div className="section_heading">
                      <h2 className="heading_text">
                        Choose Notes-Era for Unmatched Learning Experience
                      </h2>
                      <p className="heading_description mb-0">
                        Elevate your learning with Note- Era's comprehensive
                        resources, expertly tailored to enhance your educational
                        journey and success.
                      </p>
                    </div>
                    <ul className="info_list unordered_list_block">
                      <li>
                        <i className="fas fa-square"></i>
                        <span>
                          Tailored courses for top grades and academic
                          excellence.
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>
                        <span>
                          Quick prep: notes, last-minute study, key questions,
                          and more.
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>
                        <span>
                          Skip assignment worries: no files, projects, or
                          hassles.
                        </span>
                      </li>
                    </ul>
                    <div className="btn_wrap pb-0">
                      <a className="btn btn_dark" href="/courses">
                        <span>
                          <small>Get Your Assignments</small>
                          <small>Get Your Assignments</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--         Courses Info Section - End
            ================================================== -->

          <!-- Pricing Section - Start
            ================================================== --> */}
          <section className="pricing_section section_space_lg bg_light">
            <div className="container decoration_wrap">
              <div className="section_heading text-center">
                <h2 className="heading_text mb-0">Premium BootCamps</h2>
              </div>

              <div className="pricing_cards_wrapper row align-items-center">
                <div className="col col-lg-4">
                  <div className="pricing_card text-center tilt">
                    <h3 className="card_heading">Basic Plan</h3>
                    <div className="pricing_wrap">
                      <span className="price_value">
                        <sup>₹</sup>49
                      </span>
                      <small className="d-block">Special Offer!</small>
                    </div>
                    <hr />
                    <ul className="info_list unordered_list_block text-start">
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>
                          DSA in C++ / Basic C-Programming for 1st Sem Students.
                          Any one bootcamp lectures recording (valid for only 3
                          Months).
                        </span>
                      </li>
                      <li />
                      <i className="fas fa-caret-right"></i>
                      <span>Notes+Assignments</span>
                      {/* <!--                   </li>
                                  <li>
                                    <i className="fas fa-caret-right"></i>
                                <span></span> -->
                <!--                   </li>
                                  <li>
                                    <i className="fas fa-caret-right"></i> -->
                <!--              <span>End Semster Exam Packages</span> -->
                <!--                   </li> -->  */}
                    </ul>
                    <div className="btn_wrap pb-0">
                      <a className="btn border_dark" href="#!">
                        <span>
                          <small>Soon</small>
                          <small>Soon</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="pricing_card text-center bg_dark tilt">
                    {/* <!--                 <div className="card_badge">For 1st Year Only</div> --> */}
                    <h3 className="card_heading">Standard Plan</h3>
                    <div className="pricing_wrap">
                      <span className="price_value">
                        <sup>₹</sup>69
                      </span>
                      <small className="d-block">Special Offer !</small>
                    </div>
                    <hr />
                    <ul className="info_list unordered_list_block text-start">
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>
                          10 Days Basic C-Programming Bootcamp for First Year
                          Students.
                        </span>
                      </li>
                      <center>(OR)</center>
                      <li>
                        <span>
                          10 Days Basic JAVA Programming Bootcamp for Second
                          Year Students.
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Live Classes+Doubt Sessions</span> {/* Refer */}
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>
                          Lectures recording (Valid for only 3 Months).
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>VIVA Questions</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Notes+Assignments</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Logic Building</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Resume Building</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Certificates ISO Certified</span>
                      </li>
                    </ul>
                    <div className="btn_wrap pb-0">
                      <a
                        className="btn btn_primary"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9tazhrqFzZ_EYh-nPGgVaOjEXxIbkRajOaY8nRteXivCq3Q/viewform?usp=sf_link"
                      >
                        <span>
                          <small>Register Now</small>
                          <small>Register Now</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="pricing_card text-center tilt">
                    <h3 className="card_heading">Premium Plan</h3>
                    <div className="pricing_wrap">
                      <span className="price_value">
                        <sup>₹</sup>99
                      </span>
                      <small className="d-block">Special Offer!</small>
                    </div>
                    <hr />
                    <ul className="info_list unordered_list_block text-start">
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>DSA in C++ 15 Days Bootcamp</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Live Classes+Doubt Sessions</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Logic Building</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Basic Interview Questions Practice</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>
                          Lectures recordings(Valid for only 3 Months)
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Notes+Assignments</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Resume Building</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Certificates ISO Certified</span>
                      </li>
                    </ul>
                    <div className="btn_wrap pb-0">
                      <a
                        className="btn border_dark"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9tazhrqFzZ_EYh-nPGgVaOjEXxIbkRajOaY8nRteXivCq3Q/viewform?usp=sf_link"
                      >
                        <span>
                          <small>Register Now</small>
                          <small>Register Now</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-3">
                  <div className="pricing_card text-center bg_dark tilt">
                    {/* <!--                 <div className="card_badge">For 1st Year Only</div> --> */}
                    <h3 className="card_heading">Mega Plan</h3>
                    <div className="pricing_wrap">
                      <span className="price_value">
                        <sup>₹</sup>159
                      </span>
                      <small className="d-block">Special Offer !</small>
                    </div>
                    <hr />
                    <ul className="info_list unordered_list_block text-start">
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>15 Days Python MEGA bootcamp</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>PYTHON from scratch</span> {/* Refer */}
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Live Classes+Doubt Sessions</span> {/* Refer */}
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>2 Practical projects</span> {/* Refer */}
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Lectures recording (for 1 year) .</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>GIT/GITHUB mastery</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Linkedin Growing tips</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Life time code access</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Certificates ISO Certified</span>
                      </li>
                    </ul>
                    <div className="btn_wrap pb-0">
                      <a
                        className="btn btn_primary"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9tazhrqFzZ_EYh-nPGgVaOjEXxIbkRajOaY8nRteXivCq3Q/viewform?usp=sf_link"
                      >
                        <span>
                          <small>Register Now</small>
                          <small>Register Now</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="deco_item shape_img_1"
                data-parallax='{"y" : 130, "smoothness": 6}'
              >
                <img
                  src="assets/images/shape/shape_img_4.png"
                  alt="NotesEra – Online Learning Platform"
                />
              </div>
              <div
                className="deco_item shape_img_2"
                data-parallax='{"y" : -130, "smoothness": 6}'
              >
                <img
                  src="assets/images/shape/shape_img_5.png"
                  alt="NotesEra – Online Learning Platform"
                />
              </div>
            </div>
          </section>
          {/* <!-- Pricing Section - End
            ================================================== -->
          
        </main>
        {/* <!-- Main Body - End
              ================================================== --> */}
        </main>
        <Footer/>
       
      </div>
      
    </>
  );
}
