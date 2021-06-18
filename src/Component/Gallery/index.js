import React from "react";

// Asset
import "./style.css";

function Gallery() {
  return (
    <div className="gallery">
      <h1>Our Gallery</h1>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            data-aos="fade-up"
            data-aos-duration="900"
            src="https://1.bp.blogspot.com/-Q7TtokntPlU/XygeuiB-XfI/AAAAAAAAHHA/jZIUkMo-ItwClmoYhf8x0Qf6SYrEicpxgCLcBGAsYHQ/s1600/1.gif"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            data-aos="fade-up"
            data-aos-duration="900"
            src="https://i.pinimg.com/originals/63/18/d4/6318d42c351ddffaff82568d9093f33d.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            data-aos="fade-up"
            data-aos-duration="900"
            src="https://64.media.tumblr.com/86ebb426f1127c1210e7b2d5c909e7a3/009bb117a480df96-bb/s640x960/7d244e3089e26fd76dbfea7dea37eec30b805ead.png"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            data-aos="fade-up"
            data-aos-duration="900"
            src="https://i.pinimg.com/474x/88/3f/51/883f5115db5e39bd9cc9474207fce230.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            data-aos="fade-up"
            data-aos-duration="900"
            src="https://www.lovinkproject.com/wp-content/uploads/2021/03/d84f710f52006da3baac6b6727e8b8a0.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="900"
            src="https://dbkpop.com/wp-content/uploads/cache/2021/03/Weeekly_After_School_Jihan_3/3944390263.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
