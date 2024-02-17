import Carousel from "../../../../components/Carousel/Carousel";
import ReviewCard from "./ReviewCard";
import styles from "./TestimonialSection.module.css";

const TestimonialSection = () => {
  return (
    <section className={`${styles.section} container d-flex flex-column mb-5`}>
      <header
        className={`${styles.header} d-flex flex-column align-items-center mb-4`}
      >
        <h1>Testimonials</h1>
        <h2>What Our Customer Say About Us</h2>
      </header>
      <main>
        <Carousel
          loop
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          centeredSlides={true}
          showArrows
          breakpoints={{
            1000: { slidesPerView: 3 },
          }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          slideClasses={styles.inactiveCard}
          activeSlideClasses={styles.activeCard}
        >
          <ReviewCard
            imgSrc="/Assets2/Premium-Modules/Reviewers/kanishk-jain.png"
            imgAlt="Kanishk Jain"
            name="Kanishk Jain"
            about="Medi-Caps University"
            rating={4}
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
          />
          <ReviewCard
            imgSrc="/Assets2/Premium-Modules/Reviewers/mahik-makariya.png"
            imgAlt="Mahik Makariya"
            name="Mahik Makariya"
            about="Medi-Caps University"
            rating={4}
            shortReview="It was a very good experience"
            review="AAJ TAK WEBSITE HI NAHI KHULI INKI MERE PHONE FIR BHI ACHHI HAI BHAIII"
          />
          <ReviewCard
            imgSrc="/Assets2/Premium-Modules/Reviewers/kanishk-jain.png"
            imgAlt="Kanishk Jain"
            name="Kanishk Jain"
            about="Medi-Caps University"
            rating={4}
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
          />
          <ReviewCard
            imgSrc="/Assets2/Premium-Modules/Reviewers/kanishk-jain.png"
            imgAlt="Kanishk Jain"
            name="Kanishk Jain"
            about="Medi-Caps University"
            rating={4}
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
          />
          <ReviewCard
            imgSrc="/Assets2/Premium-Modules/Reviewers/kanishk-jain.png"
            imgAlt="Kanishk Jain"
            name="Kanishk Jain"
            about="Medi-Caps University"
            rating={4}
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
          />
          <ReviewCard
            imgSrc="/Assets2/Premium-Modules/Reviewers/kanishk-jain.png"
            imgAlt="Kanishk Jain"
            name="Kanishk Jain"
            about="Medi-Caps University"
            rating={4}
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
          />
        </Carousel>
      </main>
    </section>
  );
};

export default TestimonialSection;
