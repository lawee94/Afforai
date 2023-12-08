import Marquee from "react-fast-marquee";
import { Button, CheckMark, ChevronRight, ViewPortWrapper } from "../assets";
import { features } from "./extra";

export const ViewPort = () => {
  return (
    <ViewPortWrapper>
      <div className="deal">
        <img
          src="https://afforai.com/img/icons/appsumo.png"
          width={26}
          alt="AppSumo"
        />
        Now on AppSumo
        <a
          href="https://appsumo.8odi.net/3eR3xn"
          target="_blank"
          rel="noreferrer"
        >
          <p>
            Get Lifetime Deal <ChevronRight />
          </p>
        </a>
      </div>
      <div className="text-content">
        <h1>Your second brain for maximizing productivity</h1>
        <p>
          Afforai is an AI chatbot that searches, summarizes, and translates
          info from multiple sources to produce trustworthy research. Feed
          lengthy research documents to stacks of dry compliance requirements
          and extract the key findings you need.
        </p>
      </div>

      <div className="d-block d-xl-none">
        <Marquee>
          <Features />
        </Marquee>
      </div>

      <div className="d-none d-xl-block">
        <Features />
      </div>

      <div className="d-flex justify-content-center">
        <Button className="btn-gradient btn-md me-3">Try for free</Button>
        <Button className="btn-gray btn-md">View Pricing</Button>
      </div>
    </ViewPortWrapper>
  );
};

const Features = () => (
  <div className="d-flex justify-content-center mb-4">
    {features.map((feature) => (
      <div className="feature">
        <CheckMark />
        {feature}
      </div>
    ))}
  </div>
);