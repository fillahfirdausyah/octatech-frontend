import React from "react";

// Asset
import "./style.css";

function Gallery() {
  return (
    <div className="gallery text-center"> 
      <h1>GALLERY KAMI</h1>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            data-aos="fade-up"
            data-aos-duration="900"
            // src="https://1.bp.blogspot.com/-Q7TtokntPlU/XygeuiB-XfI/AAAAAAAAHHA/jZIUkMo-ItwClmoYhf8x0Qf6SYrEicpxgCLcBGAsYHQ/s1600/1.gif"
            src="https://mms.businesswire.com/media/20130516005110/en/369260/5/sh13_06-kitchen_EPP5032_s4x3.jpg"
            class="w-100 shadow-1-strong mb-4"
            alt=""
          />

          <img
            data-aos="fade-up"
            data-aos-duration="900"
            // src="https://i.pinimg.com/originals/63/18/d4/6318d42c351ddffaff82568d9093f33d.jpg"
            src="http://www.harakis.com/wp-content/uploads/2018/04/Smart-Home-1.jpg"
            class="w-100 shadow-1-strong mb-4"
            alt=""
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            data-aos="fade-up"
            data-aos-duration="900"
            // src="https://64.media.tumblr.com/86ebb426f1127c1210e7b2d5c909e7a3/009bb117a480df96-bb/s640x960/7d244e3089e26fd76dbfea7dea37eec30b805ead.png"
            src="https://www.goodworklabs.com/wp-content/uploads/2017/08/smart-home.jpg"
            class="w-100 shadow-1-strong mb-4"
            alt=""
          />

          <img
            data-aos="fade-up"
            data-aos-duration="900"
            // src="https://i.pinimg.com/474x/88/3f/51/883f5115db5e39bd9cc9474207fce230.jpg"
            src="https://cnet4.cbsistatic.com/hub/i/2016/01/06/2e3983da-d559-4903-a3ce-7d8002cf0669/ces2016opcomfarm.jpg"
            class="w-100 shadow-1-strong mb-4"
            alt=""
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            data-aos="fade-up"
            data-aos-duration="900"
            // src="https://www.lovinkproject.com/wp-content/uploads/2021/03/d84f710f52006da3baac6b6727e8b8a0.jpg"
            src="https://mobilemarketingmagazine.com/wp-content/uploads/2016/05/lg-smart-garden-chelsea-e1463128419157-1024x616.jpg"
            class="w-100 shadow-1-strong mb-4"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="900"
            // src="https://dbkpop.com/wp-content/uploads/cache/2021/03/Weeekly_After_School_Jihan_3/3944390263.jpg"
            src="https://www.activistpost.com/wp-content/uploads/2018/02/smart-parking.jpg"
            class="w-100 shadow-1-strong mb-4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
