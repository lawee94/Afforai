import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { CommonLayoutWrapper, HeadingOne, ProductLink, links } from "../assets";
import { MarqueeData, useDragAndScroll } from "./hook/useDragAndScroll";
import { testimonialM1, testimonialM2 } from "./extra";

export const Testimonials = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTwoRef = useRef<HTMLDivElement>(null);

  const {
    testimonials,
    handleScroll,
    handleDragStart,
    handleDragEnd,
    handleDrag,
  } = useDragAndScroll({ ref: marqueeRef, data: testimonialM1 });
  const {
    testimonials: testimonialTwo,
    handleScroll: handleM2Scroll,
    handleDragStart: handleM2DragStart,
    handleDragEnd: handleM2DragEnd,
    handleDrag: handleM2Drag,
  } = useDragAndScroll({ ref: marqueeTwoRef, data: testimonialM2 });

  return (
    <CommonLayoutWrapper>
      <div className="containers">
        <div className="row text-center justify-content-center">
          <div className="col-12">
            <img src={links.rating} width={170} alt="" />
          </div>

          <div className="col-lg-6 col-md-8 ">
            <HeadingOne className="my-4">See what our users say</HeadingOne>
            <p className="">Loved by thousands, all around the World</p>
          </div>
        </div>
      </div>

      <div
        ref={marqueeRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDrag}
        className="d-flex mb-4"
      >
        <Marquee autoFill pauseOnClick>
          {testimonials.map((testimonial, i) => (
            <div key={`${testimonial.name}${i}`} onPointerEnter={handleScroll}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </Marquee>
      </div>

      <div
        ref={marqueeTwoRef}
        onMouseDown={handleM2DragStart}
        onMouseUp={handleM2DragEnd}
        onMouseMove={handleM2Drag}
        className="d-flex"
      >
        <Marquee autoFill pauseOnClick direction="right">
          {testimonialTwo.map((testimonial, i) => (
            <div
              key={`${testimonial.name}${i}-two`}
              onPointerEnter={handleM2Scroll}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </Marquee>
      </div>
    </CommonLayoutWrapper>
  );
};

export const Testimonial = ({ imgLink, title, name }: MarqueeData) => (
  <div className="item item-600">
    <div className="testimonial-text">
      <p>{title}</p>
    </div>

    <div className="item-content border-top d-flex align-items-center justify-content-between flex-wrap px-0 pb-0">
      <div className="d-flex align-items-center mb-3">
        <img src={imgLink} alt={name} width={32} />
        <span className="text-gray text-sm mb-0 ms-2">{name}</span>
      </div>
      <ProductLink
        href={links.productHuntLink}
        target="_blank"
        rel="noreferrer"
      >
        <img src={links.productHuntIcon} alt={name} /> View on Product Hunt
      </ProductLink>
    </div>
  </div>
);
