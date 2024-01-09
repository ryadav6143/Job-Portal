import React, { useEffect } from "react";
import "./MediStaff.css";
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
    $(".block-01, .block-03, .block-04, .subtitles, .values-paragraph ").on(
      "click",
      function () {
        $(this).toggleClass("active");
        $(this).find(".casse-tete-home").toggleClass("turn45");
        console.log("clicked");
      }
    );
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
                  src="https://assets-global.website-files.com/610c251287ec86f4848cd877/61119bb129a12a1b8e96b4cd_%2B.png"
                  loading="lazy"
                  alt=""
                  className="plus bigger"
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
                      src="https://assets-global.website-files.com/6113db8b6628664e9136dbfd/632d15c8060207075a7e1406_instagram.fymq2-1.fna.fbcdn%201.jpg"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 767px) 100vw, 307.515625px"
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero recusandae sapiente aut hic quos obcaecati et corporis
                    quo. Mollitia ex quod obcaecati, eos sapiente minima optio
                    quas repellat omnis tempore!
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
                      <div role="listitem" class="collection-item-2 w-dyn-item">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae corporis quis cupiditate aspernatur minima autem fuga
                    quod distinctio, ipsum omnis esse aliquam ad officiis nobis
                    commodi quae rerum error minus!
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
              <div className="plus-container casse-tete-home align-right">
                <img
                  src="https://assets-global.website-files.com/610c251287ec86f4848cd877/61119bb129a12a1b8e96b4cd_%2B.png"
                  loading="lazy"
                  alt=""
                  className="plus bigger"
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
