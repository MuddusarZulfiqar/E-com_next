import React from "react";
import styles from "./bannerSlider.module.scss";
import Carousel from "@/components/common/baseCarousel";
import Image from "next/image";
function BannerSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`${styles.mainbanner} bannerSlider`}>
      <Carousel settings={settings} className={styles.slides}>
        <div className={styles.slides_item}>
          <div className={styles.slides__itemBackground}>
            <Image
              src="/assets/home/manBanner.jpg"
              layout="fill"
              className="img-fluid"
            />
          </div>
          <div className={styles.slides__mainContent}>
            <div className="bannerLogo">
              <Image
                src="/assets/home/BannerLogo.png"
                width={230}
                height={240}
                className="img-fluid"
              />
              <h3 className={`text-white text-uppercase ${styles.subtitle}`}>
                Life is too short
              </h3>
              <h2 className={`text-white text-uppercase ${styles.title}`}>
                to wear boring clothes{" "}
              </h2>
              <button className="btn btn-theme btn-large">shop now</button>
            </div>
          </div>
        </div>
        <div className={styles.slides_item}>
          <div className={styles.slides__itemBackground}>
            <Image
              src="/assets/home/manBanner.jpg"
              layout="fill"
              className="img-fluid"
            />
          </div>
          <div className={styles.slides__mainContent}>
            <div className="bannerLogo">
              <Image
                src="/assets/home/BannerLogo.png"
                width={230}
                height={240}
                className="img-fluid"
              />
              <h3 className={`text-white text-uppercase ${styles.subtitle}`}>
                Life is too short
              </h3>
              <h2 className={`text-white text-uppercase ${styles.title}`}>
                to wear boring clothes{" "}
              </h2>
              <button className="btn btn-theme btn-large">shop now</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default BannerSlider;
