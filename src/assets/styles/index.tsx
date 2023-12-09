import styled from "styled-components";

export const AppWrapper = styled.body`
  margin: 0;
  font-family:
    Manrope,
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Noto Sans,
    Liberation Sans,
    Arial,
    sans-serif,
    Apple Color Emoji,
    NotoColorEmojiLimited,
    Segoe UI Emoji,
    Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1600px;
  margin: 0 auto;
  padding: 100px 60px;
  color: rgb(82, 82, 82);

  .container {
    padding: 170px 60px;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .text-purple {
    color: rgb(128, 54, 255);
  }

  .badge-primary {
    background: rgb(239, 230, 255);
    color: rgb(96, 4, 255);
  }

  .navbar-brand {
    font-size: 18px;
    color: rgb(17, 17, 17);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      height: 24px;
      width: 24px;
    }
  }

  .spacing-100 {
    padding: 100px 0 100px 60px;
  }

  .text-sm {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;

    .container {
      padding: 40px 0;
    }
  }
`;

export const Title = styled.h6`
  color: rgb(17, 17, 17);
  font-weight: 500;
`;

export const TitleDeep = styled(Title)`
  color: rgb(58, 2, 153);
`;

export const HeadingOne = styled(Title)`
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 14px;
  text-align: center;
  transition-duration: 0.2s;
  cursor: pointer;
  box-shadow: none;

  &.btn-md {
    font-size: 16px;
  }

  &.btn-gradient {
    background: linear-gradient(
      135deg,
      #6004ff,
      #7f35ff 23.95%,
      #370097 60.11%,
      #8d4aff
    );
    border: 1px solid hsla(0, 0%, 100%, 0.2);
    color: #fff;
  }

  &.btn-bordered {
    background: rgb(250, 250, 250);
    border: 2px solid rgb(128, 54, 255);
    color: rgb(128, 54, 255);
    font-size: 13px;
  }

  &.btn-gray {
    background-color: #f5f5f5;
    border: 1px solid #e6e6e6;
    color: #525252;
  }

  &[data-state="active"],
  &:focus,
  &:active,
  &:focus-visible {
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    font-weight: 500;
    padding: 3px 8px;
  }
`;

export const HeaderNav = styled.nav`
  padding: 1.5rem 0;

  .header {
    padding: 0;
    max-width: 1264px;
    padding: 8px 24px;
    border: 1px solid rgb(209, 213, 219);
    border-radius: 16px;
    backdrop-filter: blur(16px);
    background: rgba(250, 250, 250, 0.5);
    margin: auto;
  }

  .navbar-nav {
    margin: auto;

    a {
      color: rgb(17, 17, 17);
      font-weight: 500;
      font-size: 14px;
      margin: auto 10px;
    }
  }

  .navbar-toggler {
    padding: 2px;

    &[data-state="active"],
    &:focus,
    &:active,
    &:focus-visible {
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    .header {
      padding: 0;
      padding: 8px 24px;
      border-radius: 0;
    }
  }
`;

export const FooterWrapper = styled.footer`
  max-width: 1264px;
  padding: 32px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 16px;
  margin: auto;
  font-size: 13px;

  span,
  a,
  li {
    margin-bottom: 20px;
    display: block;
  }

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

export const ViewPortWrapper = styled.div`
  text-align: center;
  padding: 40px 20px 0 20px;

  .deal {
    padding: 6px 6px 6px 10px;
    margin-bottom: 30px;
    gap: 6px;
    border-radius: 12px;
    border: 2px solid rgb(51, 51, 51);
    background: linear-gradient(
      269deg,
      rgb(255, 185, 1) 17.08%,
      rgb(255, 149, 1) 100%
    );
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 1px 1px 0px,
      rgba(0, 0, 0, 0.09) 0px 2px 2px 0px,
      rgba(0, 0, 0, 0.05) 0px 5px 3px 0px,
      rgba(0, 0, 0, 0.01) 0px 9px 4px 0px,
      rgba(0, 0, 0, 0) 0px 14px 4px 0px;
    backdrop-filter: blur(28px);
    color: rgb(51, 51, 51);
    font-size: 13px;
    font-weight: 600;
    display: inline-block;

    img {
      width: 26px;
      margin-right: 5px;
    }

    p {
      display: inline-block;
      margin: 0 0 0 6px;
      padding: 6px 0 6px 6px;
      gap: 2px;
      border-radius: 6px;
      border: 1px solid rgb(51, 51, 51);
      color: inherit;

      background: linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.5) 50.04%,
        rgba(255, 255, 255, 0.5) 50.85%
      );

      svg {
        transform: rotate(-90deg);
      }
    }
  }

  .text-content {
    max-width: 670px;
    margin: auto;

    h1 {
      font-weight: 600;
      font-size: 48px;
      line-height: 130%;
      color: rgb(34, 34, 34);
    }

    p {
      margin: 50px 0;
    }
  }

  .feature {
    padding: 4px 6px;
    gap: 4px;
    border-radius: 4px;
    border: 1px solid rgb(230, 230, 230);
    margin-right: 40px;
    font-size: 13px;

    svg {
      margin-right: 5px;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 576px) {
    padding: 40px 0 0;
    text-align: left;
    .deal {
      width: 100%;
    }
    .text-content {
      h1 {
        font-size: 40px;
      }
    }
  }

  @media (max-width: 480px) {
    .buttons {
      display: block;

      button {
        width: 100%;
        margin-bottom: 15px;
      }
    }
  }
`;

export const LovedUserWrapper = styled.div`
  padding: 200px 0 0;
  position: relative;
  border-radius: 28px;
  text-align: center;
  background: url("https://afforai.com/img/graphics/laptop-landing-3.png")
    no-repeat;
  background-size: 100%;
  margin-top: -80px;

  .summary-img {
    padding: 0 80px 80px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CommonDocumentWrapper = styled.div`
  justify-content: space-between;
  align-items: center;

  .check-success {
    color: rgb(3, 204, 59);
    font-size: 16px;
    margin-bottom: 15px;
    font-weight: 500;

    img {
      margin-right: 10px;
    }
  }

  .mode {
    display: flex;
    font-size: 14px;
    color: rgb(38, 2, 102);
    margin-bottom: 20px;

    .mode-content {
      padding-top: 2px;
    }
    p {
      display: flex;
    }
  }
`;

export const CommonLayoutWrapper = styled.div`
  .container-content {
    justify-content: center;
    text-align: center;

    @media (max-width: 576px) {
      text-align: left;
    }
  }
  .item {
    border-radius: 1rem;
    border: 1px solid rgb(230, 230, 230);
    overflow: hidden;
    margin-bottom: 20px;

    .testimonial-text {
      color: rgb(34, 34, 34);
      margin-bottom: 40px;
      min-height: 140px;
    }

    &.item-600 {
      width: 600px;
      min-width: 600px;
      padding: 25px 25px 0;
      margin-right: 20px;

      @media (max-width: 576px) {
        width: 330px;
        min-width: 330px;
      }
    }

    .img-wrapper {
      background: rgb(245, 245, 245);
      border-bottom: 1px solid rgb(230, 230, 230);
    }

    .item-content {
      padding: 20px;
    }

    small {
      font-size: 12px;
    }
  }
`;

export const StartSavingWrapper = styled.div`
  border-radius: 28px;
  text-align: center;
  background: url("https://afforai.com/img/graphics/laptop-landing-16.png")
    no-repeat;
  background-size: 100% 100%;
  min-height: 400px;
`;

export const ProductLink = styled.a`
  background: rgb(246, 232, 229);
  border: 1px solid rgb(255, 60, 5);
  color: rgb(255, 58, 2) !important;
  font-size: 12px;
  font-weight: 500;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  margin-bottom: 15px;

  img {
    margin-right: 3px;
  }
`;

export const FAQWrapper = styled.div`
  .faq {
    padding: 24px 24px 12px;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 0.5rem;
    margin-bottom: 20px;

    a {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 15px;

      svg {
        width: 30px;
        height: 30px;
        transition-duration: 0.5s;
      }

      &.collapsed {
        svg {
          transform: rotate(180deg);
          transition-duration: 0.5s;
        }
      }
    }
  }

  .row a {
    color: rgb(96, 4, 255);
    text-decoration: underline rgb(96, 4, 255);
  }
`;
