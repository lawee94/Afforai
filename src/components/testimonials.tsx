import Marquee from "react-fast-marquee";
import { CommonLayoutWrapper, HeadingOne, ProductLink, links } from "../assets";
import { testimonialTwo, testimonials } from "./extra";

interface TestimonialProps {
  imgLink: string;
  title: string;
  name: string;
}

export const Testimonials = () => {
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
      <Marquee>
        <div className="d-flex mb-4">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Marquee>

      <Marquee direction="right">
        <div className="d-flex">
          {testimonialTwo.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Marquee>
    </CommonLayoutWrapper>
  );
};

export const Testimonial = ({ imgLink, title, name }: TestimonialProps) => (
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
