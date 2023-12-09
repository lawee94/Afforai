import { ReactNode } from "react";
import {
  Button,
  CommonLayoutWrapper,
  HeadingOne,
  CommonDocumentWrapper,
} from "../../assets";

interface CommonLayoutProps {
  btnTitle?: string;
  title?: string;
  subText?: string;
  imageLink?: string;
  maxImageWidth?: number;
  underBtnTitle?: string;
  children?: ReactNode;
}

interface CommonLayoutTwoProps {
  btnTitle?: string;
  title?: string;
  subText?: string;
  showActionButtons?: boolean;
  imageLink: string;
  className?: string;
  rowClass?: string;
  colOneClass?: string;
  colTwoClass?: string;
  children?: ReactNode;
}

interface CommonLayoutThreeProps {
  imgLink: string;
  title: string;
  subText: string;
  isNew?: boolean;
  className?: string;
}

export const CommonLayout = ({
  btnTitle,
  title,
  subText,
  imageLink,
  maxImageWidth,
  underBtnTitle,
  children,
}: CommonLayoutProps) => {
  return (
    <CommonLayoutWrapper className="container ">
      <div className="row container-content">
        {btnTitle && (
          <div className="col-12">
            <Button className="btn-bordered">{btnTitle}</Button>
          </div>
        )}

        <div className="col-lg-6 col-md-8">
          <HeadingOne className="my-4"> {title && title} </HeadingOne>
          {subText && <p className="">{subText}</p>}

          {underBtnTitle && (
            <Button className="btn-gradient btn-md my-4">
              {underBtnTitle}
            </Button>
          )}
        </div>

        <div className="col-12" />

        {imageLink && (
          <div
            className="col-12 mt-5 mx-auto"
            style={{ maxWidth: maxImageWidth }}
          >
            <img src={imageLink} alt="" className="img-fluid" />
          </div>
        )}
      </div>
      {children}
    </CommonLayoutWrapper>
  );
};

export const CommonLayoutTwo = ({
  btnTitle,
  title,
  subText,
  showActionButtons,
  imageLink,
  className,
  rowClass,
  colOneClass = "col-md-5",
  colTwoClass = "col-md-6",
  children,
}: CommonLayoutTwoProps) => {
  return (
    <div className={`container ${className}`}>
      <CommonDocumentWrapper className={`row ${rowClass}`}>
        <div className={`mb-5 ${colOneClass}`}>
          {btnTitle && (
            <Button className="btn-bordered mb-4">{btnTitle}</Button>
          )}

          {title && <HeadingOne>{title}</HeadingOne>}

          {subText && <p className="my-4">{subText}</p>}

          {showActionButtons && (
            <div className="buttons d-none d-lg-block">
              <Button className="btn-gradient btn-md me-3">Try for free</Button>
              <Button className="btn-gray btn-md">View Pricing</Button>
            </div>
          )}

          {children}
        </div>
        <div className={colTwoClass}>
          <img src={imageLink} className="img-fluid" alt="" />
        </div>
      </CommonDocumentWrapper>
    </div>
  );
};

export const CommonLayoutThree = ({
  imgLink,
  title,
  subText,
  isNew,
}: CommonLayoutThreeProps) => (
  <div className="text-start item">
    <div className="img-wrapper">
      <img src={imgLink} alt="" className="img-fluid" />
    </div>

    <div className="item-content">
      <h6>
        {title}{" "}
        {isNew && (
          <span className="badge rounded-pill badge-primary ms-3">New</span>
        )}
      </h6>
      <small>{subText}</small>
    </div>
  </div>
);
