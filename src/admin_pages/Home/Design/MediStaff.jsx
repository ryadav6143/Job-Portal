import React, { useEffect } from "react";
import "./MediStaff.css";
import Laxshmikant from "../../../assets/images/Laxmikant Soni.jpg";
import $ from "jquery";
function MediStaff() {
  useEffect(() => {
    const toggleHover = (element) => {
      $(element).toggleClass("hover");
    };

    $(".block-02, .block-05, .big-horizontal, .big-vertical").hover(
      function () {
        toggleHover(this);
      },
      function () {
        toggleHover(this);
      }
    );
    const isInViewport = (elem) => {
      const bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    // ------------------ Adding active class on click--------------------------
    $(".block-01, .block-03, .block-04 ").on("click", function () {
      $(this).toggleClass("active");
      $(this).find(".casse-tete-home").toggleClass("turn45");
      $(this).find(".subtitles, .values-paragraph ").toggleClass("active");
      console.log("clicked");
    });
    //  ------------------ Adding active class on click-------------------------- F
    $(window).on("scroll", function () {
      const blocks = $(".block-01, .block-03, .block-04");

      blocks.each(function () {
        const $this = $(this);
        const isInView = isInViewport(this);

        if (isInView) {
          $this.removeClass("anim-01");
        } else {
          $this.addClass("anim-01");
        }
      });
    });

    //
    $(".block-01, .block-03, .block-04")
      .on("mouseenter", function () {
        $(this).css("z-index", "20");
      })
      .on("mouseleave", function () {
        $(this).css("z-index", "10");
      });
    return () => {
      $(window).off("scroll");
      $(
        ".block-02, .block-05, .big-horizontal, .big-vertical, #myname, .submit-form, .block-01, .block-03, .block-04"
      ).off();
    };
  }, []);

  return (
    <div>
      <div className="section">
        <div className="blocks-container">
          <div className="blocks-line">
            <div className="blocks block-01" style={{ zindex: "10" }}>
              <div className="blocks-title">
                THE HEADLINE
                <br />
              </div>
              <div className="plus-container casse-tete-home">
                <img
                  src="https://img.icons8.com/ios/50/plus--v1.png"
                  loading="lazy"
                  alt="plus--v1"
                  className="plus bigger"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div className="subtitles values-paragraph padding-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat sint error nisi a itaque dicta reprehenderit, cum
                molestias iste earum enim suscipit iusto quidem facere deserunt
                magni sequi ullam quae.
              </div>
              <div className="anim-trigger-block"></div>
            </div>
            <div className="blocks block-02">
              <div className="collection-list-wrapper-4 w-dyn-list">
                <div role="list" className="collection-list-3 w-dyn-items">
                  <div role="listitem" className="collection-item-2 w-dyn-item">
                    <img
                      src={Laxshmikant}
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 100vw, 307.515625px"
                      className="image-7"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="blocks block-03" style={{ zindex: "10" }}>
              <div className="blocks-title">
                THE HEADLINE
                <br />
              </div>

              <div className="subtitles values-paragraph padding-right">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores a praesentium eius enim adipisci, voluptatum eveniet
                  laboriosam cum voluptates quibusdam. Ipsum consectetur dolor,
                  quae magni delectus inventore et consequuntur accusamus?
                </p>
              </div>

              <div className="plus-container casse-tete-home align-right">
                <img
                  src="https://img.icons8.com/ios/50/plus--v1.png"
                  loading="lazy"
                  alt="plus--v1"
                  className="plus bigger"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            </div>
          </div>
          <div className="blocks-line second">
            <div className="div-block-2">
              <div className="div-block-3">
                <div className="blocks block-04" style={{ zindex: "10" }}>
                  <div className="blocks-title">
                    THE HEADLINE
                    <br />
                  </div>
                  <div className="subtitles values-paragraph padding-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero recusandae sapiente aut hic quos obcaecati et corporis
                    quo. Mollitia ex quod obcaecati, eos sapiente minima optio
                    quas repellat omnis tempore!
                  </div>
                  <div className="plus-container casse-tete-home">
                    <img
                      src="https://img.icons8.com/ios/50/plus--v1.png"
                      loading="lazy"
                      alt="plus--v1"
                      className="plus bigger"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                </div>
                <div className="blocks block-05">
                  <div className="collection-list-wrapper-4 w-dyn-list">
                    <div role="list" className="collection-list-3 w-dyn-items">
                      <div role="listitem" class="collection-item-2 w-dyn-item">
                        <img
                          src={Laxshmikant}
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 767px) 100vw, 307.515625px"
                          className="image-7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-block-3 second">
                <div className="blocks big-horizontal">
                  <div className="collection-list-wrapper-4 w-dyn-list">
                    <div role="list" className="collection-list-3 w-dyn-items">
                      <div
                        role="listitem"
                        className="collection-item-2 w-dyn-item"
                      >
                        <img
                          src={Laxshmikant}
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 767px) 100vw, 615.03125px"
                          className="image-7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-4">
              <div className="blocks big-vertical">
                <div className="collection-list-wrapper-4 w-dyn-list">
                  <div role="list" className="collection-list-3 w-dyn-items">
                    <div
                      role="listitem"
                      className="collection-item-2 w-dyn-item"
                    >
                      <img
                        src={Laxshmikant}
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 767px) 100vw, 307.515625px"
                        className="image-7"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blocks-container mobile">
          <div className="blocks-line">
            <div className="blocks block-01">
              <div className="blocks-title">
                THE HEADLINE
                <br />
              </div>
              <div className="plus-container casse-tete-home">
                <img
                  src="https://img.icons8.com/ios/50/plus--v1.png"
                  loading="lazy"
                  alt="plus--v1"
                  className="plus bigger"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div className="subtitles values-paragraph padding-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo sit tenetur illo quod tempore! Voluptatem animi harum,
                facere fuga dolorem quas, facilis tempore et similique officiis
                dolor at eligendi dolores!
              </div>
            </div>
            <div className="blocks block-02">
              <div className="collection-list-wrapper-4 w-dyn-list">
                <div role="list" className="collection-list-3 w-dyn-items">
                  <div role="listitem" className="collection-item-2 w-dyn-item">
                    <img
                      src={Laxshmikant}
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 211.1875px, 100vw"
                      className="image-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blocks-line second">
            <div className="div-block-2">
              <div className="div-block-3">
                <div className="blocks block-04">
                  <div className="blocks-title">
                    THE HEADLINE
                    <br />
                  </div>
                  <div className="subtitles values-paragraph padding-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae corporis quis cupiditate aspernatur minima autem fuga
                    quod distinctio, ipsum omnis esse aliquam ad officiis nobis
                    commodi quae rerum error minus!
                  </div>
                  <div className="plus-container casse-tete-home">
                    <img
                      src="https://img.icons8.com/ios/50/plus--v1.png"
                      loading="lazy"
                      alt="plus--v1"
                      className="plus bigger"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                </div>
                <div className="blocks block-05">
                  <div className="collection-list-wrapper-4 w-dyn-list">
                    <div role="list" className="collection-list-3 w-dyn-items">
                      <div
                        role="listitem"
                        className="collection-item-2 w-dyn-item"
                      >
                        <img
                          src={Laxshmikant}
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 767px) 211.1875px, 100vw"
                          className="image-7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-block-3 second">
                <div className="blocks big-horizontal">
                  <div className="collection-list-wrapper-4 w-dyn-list">
                    <div role="list" className="collection-list-3 w-dyn-items">
                      <div
                        role="listitem"
                        className="collection-item-2 w-dyn-item"
                      >
                        <img
                          src={Laxshmikant}
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 767px) 211.1875px, 100vw"
                          className="image-7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-4">
              <div className="blocks big-vertical">
                <div className="collection-list-wrapper-4 w-dyn-list">
                  <div role="list" className="collection-list-3 w-dyn-items">
                    <div
                      role="listitem"
                      className="collection-item-2 w-dyn-item"
                    >
                      <img
                        src={Laxshmikant}
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 767px) 211.1875px, 100vw"
                        className="image-7"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blocks block-03">
              <div className="blocks-title">
                THE HEADLINE
                <br />
              </div>
              <div className="plus-container casse-tete-home align-right">
                <img
                  src="https://img.icons8.com/ios/50/plus--v1.png"
                  loading="lazy"
                  alt="plus--v1"
                  className="plus bigger"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div className="subtitles values-paragraph padding-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, ea. Quod adipisci consectetur atque rem deserunt,
                nulla pariatur eveniet tempore non minima laborum a dolores est,
                sint cumque nemo dolorem.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediStaff;
