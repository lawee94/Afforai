import { LovedUserWrapper, links } from "../assets";

export const LandingSummary = () => {
  return (
    <LovedUserWrapper>
      <div className="summary-img">
        <img src={links.laptopLanding1} className="img-fluid" alt="" />
      </div>
    </LovedUserWrapper>
  );
};

export const LovedUsers = () => (
  <div className="text-center my-5">
    <p>
      Loved by <span className="text-purple"> 20,000+ </span> users around the
      world
    </p>
    <img src={links.laptopLanding2} width={330} alt="" />
  </div>
);
