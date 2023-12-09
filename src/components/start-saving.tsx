import { Button, HeadingOne, StartSavingWrapper, links } from "../assets";

export const StartSaving = () => {
  return (
    <StartSavingWrapper>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 ">
          <HeadingOne className="my-4"> Start saving time today! </HeadingOne>
          <p className="">
            Join an ever-growing community, and get with Afforai started free of
            charge!
          </p>

          <a href={links.signup} target="_blank" rel="noreferrer">
            <Button className="btn-gradient btn-md my-4">
              Get Started For Free
            </Button>
          </a>
        </div>
      </div>
    </StartSavingWrapper>
  );
};
