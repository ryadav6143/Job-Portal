import React, { useEffect } from "react";
import "./MediStaff.css";
import $ from "jquery";
function MediStaff() {
  useEffect(() => {
    // Function to toggle "hover" class on mouse enter/leave
    const toggleHover = (element) => {
      $(element).toggleClass("hover");
    };

    // Hover effects for specific elements
    $(".block-02, .block-05, .big-horizontal, .big-vertical").hover(
      function () {
        toggleHover(this);
      },
      function () {
        toggleHover(this);
      }
    );

    // Scroll into view effects for the anim-trigger-block
    $(".anim-trigger-block").on(".inview", function (event, isInView) {
      const blocks = $(".block-01, .block-03, .block-04");
      if (isInView) {
        blocks.removeClass(".anim-01");
        setTimeout(() => {
          $(".block-03").removeClass(".anim-01");
        }, 300);
        setTimeout(() => {
          $(".block-04").removeClass(".anim-01");
        }, 500);
      } else {
        blocks.addClass(".anim-01");
      }
    });

    // Handle input field changes
    $("#myname").on("keyup", function () {
      const value = $(this).val();
      $("#yourname, #yourname2, #yourname3").text(value);
    });

    // Form submission prevention
    $(".submit-form").click(function () {
      $(this).closest("form").submit();
    });

    // Click effects for block elements
    $(".block-01, .block-03, .block-04").on("click", function () {
      $(this).toggleClass("active");
      $(this).find(".casse-tete-home").toggleClass(".turn45");
    });

    // Z-index handling on mouse enter/leave
    $(".block-01, .block-03, .block-04")
      .on("mouseenter", function () {
        $(this).css("z-index", "20");
      })
      .on("mouseleave", function () {
        $(this).css("z-index", "10");
      });

    // Cleanup - remove event listeners on unmount
    return () => {
      // Remove all event listeners added by jQuery to avoid memory leaks
      $(window).off("scroll");
      $(
        ".block-02, .block-05, .big-horizontal, .big-vertical, .anim-trigger-block, #myname, .submit-form, .block-01, .block-03, .block-04, .burger, .close-menu"
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
                  src="https://assets-global.website-files.com/610c251287ec86f4848cd877/61119bb129a12a1b8e96b4cd_%2B.png"
                  loading="lazy"
                  alt=""
                  className="plus bigger"
                />
              </div>
              <div
                className="subtitles values-paragraph padding-left"
                style={{
                  transform: "translate3d(0px, 2vw, 0px)",
                  scale3d: "(1, 1, 1)",
                  rotateX: "(0deg)",
                  rotateY: "(0deg)",
                  rotateZ: "(0deg)",
                  skew: "(0deg, 0deg)",
                  transformstyle: "preserve-3d",
                  opacity: "0",
                }}
              >
                that companies that do good, do better in the long run. Our
                brand family consists of forward-thinking, beautifully designed
                products that address social and environmental issues meet the
                needs and expectations of today’s consumers.
              </div>
              <div className="anim-trigger-block"></div>
            </div>
            <div className="blocks block-02">
              <div className="collection-list-wrapper-4 w-dyn-list">
                <div role="list" className="collection-list-3 w-dyn-items">
                  <div role="listitem" className="collection-item-2 w-dyn-item">
                    <img
                      src="https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15c8060207075a7e1406_instagram.fymq2-1.fna.fbcdn%201.jpg"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 100vw, 307.515625px"
                      srcset="
                      https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15c8060207075a7e1406_instagram.fymq2-1.fna.fbcdn%201-p-500.jpg 500w,
                      https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15c8060207075a7e1406_instagram.fymq2-1.fna.fbcdn%201.jpg       914w
                    "
                      class="image-7"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="blocks block-03" style={{ zindex: "10" }}>
              <div class="blocks-title">
                THE HEADLINE
                <br />
              </div>
              <div
                class="subtitles values-paragraph padding-right"
                style={{
                  transform: "translate3d(0px, 2vw, 0px) ",
                  scale3d: "(1, 1, 1)",
                  rotateX: "(0deg)",
                  rotateY: "(0deg)",
                  rotateZ: "(0deg)",
                  skew: "(0deg, 0deg)",
                  transformstyle: "preserve-3d",
                  opacity: "0",
                }}
              >
                <p>
                  about people and everyday products that can make their lives
                  better. We are passionate about our brands and conduct
                  business in an honest and transparent way. We cherish our
                  relationships with founders, customers, and suppliers.
                </p>
              </div>
              <div className="plus-container casse-tete-home align-right">
                <img
                  src="https://assets-global.website-files.com/610c251287ec86f4848cd877/61119bb129a12a1b8e96b4cd_%2B.png"
                  loading="lazy"
                  alt=""
                  className="plus bigger"
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
                    what it’s like to start small, grow fast and then hit a
                    wall. The founders of nolk have been there, having started
                    and sold companies with exits totalling over $500M.
                  </div>
                  <div className="plus-container casse-tete-home">
                    <img
                      src="https://assets-global.website-files.com/610c251287ec86f4848cd877/6122dc3cc8ee4c0c4a57e73a_%2Bblue.png"
                      loading="lazy"
                      alt=""
                      className="plus bigger"
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
                          src="https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15cddd506376ed514658_instagram.fymq2-1.fna.fbcdn%202.jpg"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 767px) 100vw, 307.515625px"
                          srcset="
                          https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15cddd506376ed514658_instagram.fymq2-1.fna.fbcdn%202-p-500.jpg 500w,
                          https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15cddd506376ed514658_instagram.fymq2-1.fna.fbcdn%202-p-800.jpg 800w,
                          https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15cddd506376ed514658_instagram.fymq2-1.fna.fbcdn%202.jpg       943w
                        "
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
                          src="https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141185171b9146964ee65aa_6127e389b2162ee4a12da5a4_kana_1.jpeg"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 767px) 100vw, 615.03125px"
                          srcset="
                          https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141185171b9146964ee65aa_6127e389b2162ee4a12da5a4_kana_1-p-800.jpeg 800w,
                          https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141185171b9146964ee65aa_6127e389b2162ee4a12da5a4_kana_1.jpeg       929w
                        "
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
                        src="https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141184cf4697559e2ca2ca6_613aa6009e67a7829337191d_RachelImage.jpeg"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 767px) 100vw, 307.515625px"
                        srcset="
                        https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141184cf4697559e2ca2ca6_613aa6009e67a7829337191d_RachelImage-p-500.jpeg   500w,
                        https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141184cf4697559e2ca2ca6_613aa6009e67a7829337191d_RachelImage-p-800.jpeg   800w,
                        https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141184cf4697559e2ca2ca6_613aa6009e67a7829337191d_RachelImage-p-1080.jpeg 1080w,
                        https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141184cf4697559e2ca2ca6_613aa6009e67a7829337191d_RachelImage.jpeg        1287w
                      "
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
                  src="https://assets-global.website-files.com/610c251287ec86f4848cd877/61119bb129a12a1b8e96b4cd_%2B.png"
                  loading="lazy"
                  alt=""
                  className="plus bigger"
                />
              </div>
              <div class="subtitles values-paragraph padding-left">
                that companies that do good, do better in the long run. Our
                brand family consists of forward-thinking, beautifully designed
                products meet the needs and expectations of today’s consumers.
              </div>
            </div>
            <div className="blocks block-02">
              <div className="collection-list-wrapper-4 w-dyn-list">
                <div role="list" className="collection-list-3 w-dyn-items">
                  <div role="listitem" className="collection-item-2 w-dyn-item">
                    <img
                      src="https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15c8060207075a7e1406_instagram.fymq2-1.fna.fbcdn%201.jpg"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 211.1875px, 100vw"
                      srcset="
                      https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15c8060207075a7e1406_instagram.fymq2-1.fna.fbcdn%201-p-500.jpg 500w,
                      https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15c8060207075a7e1406_instagram.fymq2-1.fna.fbcdn%201.jpg       914w
                    "
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
                    what it’s like to start small, grow fast and then hit a
                    wall. The founders of nolk have been there, having started
                    and sold companies with exits totalling over $500M.
                  </div>
                  <div class="plus-container casse-tete-home">
                    <img
                      src="https://assets-global.website-files.com/610c251287ec86f4848cd877/6122dc3cc8ee4c0c4a57e73a_%2Bblue.png"
                      loading="lazy"
                      alt=""
                      className="plus bigger"
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
                          src="https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15cddd506376ed514658_instagram.fymq2-1.fna.fbcdn%202.jpg"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 767px) 211.1875px, 100vw"
                          srcset="
                          https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15cddd506376ed514658_instagram.fymq2-1.fna.fbcdn%202-p-500.jpg 500w,
                          https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15cddd506376ed514658_instagram.fymq2-1.fna.fbcdn%202-p-800.jpg 800w,
                          https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15cddd506376ed514658_instagram.fymq2-1.fna.fbcdn%202.jpg       943w
                        "
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
                          src="https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141185171b9146964ee65aa_6127e389b2162ee4a12da5a4_kana_1.jpeg"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 767px) 211.1875px, 100vw"
                          srcset="
                          https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141185171b9146964ee65aa_6127e389b2162ee4a12da5a4_kana_1-p-800.jpeg 800w,
                          https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141185171b9146964ee65aa_6127e389b2162ee4a12da5a4_kana_1.jpeg       929w
                        "
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
                        src="https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141184cf4697559e2ca2ca6_613aa6009e67a7829337191d_RachelImage.jpeg"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 767px) 211.1875px, 100vw"
                        srcset="
                        https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141184cf4697559e2ca2ca6_613aa6009e67a7829337191d_RachelImage-p-500.jpeg   500w,
                        https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141184cf4697559e2ca2ca6_613aa6009e67a7829337191d_RachelImage-p-800.jpeg   800w,
                        https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141184cf4697559e2ca2ca6_613aa6009e67a7829337191d_RachelImage-p-1080.jpeg 1080w,
                        https://assets-global.website-files.com/6113db8b6628664e9136dbfd/6141184cf4697559e2ca2ca6_613aa6009e67a7829337191d_RachelImage.jpeg        1287w
                      "
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
              <div class="plus-container casse-tete-home align-right">
                <img
                  src="https://assets-global.website-files.com/610c251287ec86f4848cd877/61119bb129a12a1b8e96b4cd_%2B.png"
                  loading="lazy"
                  alt=""
                  className="plus bigger"
                />
              </div>
              <div class="subtitles values-paragraph padding-right">
                that companies that do good, do better in the long run. Our
                brand family consists of forward-thinking, beautifully designed
                products meet the needs and expectations of today’s consumers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediStaff;
