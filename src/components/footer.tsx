import { FooterWrapper, Title } from "../assets";
import {
  companyInformation,
  language,
  resources,
  socialInformation,
} from "./extra";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper className="row">
      <div className="col-md-4 col-12 pe-4">
        <span className="navbar-brand">
          <img
            src="https://afforai.com/img/graphics/logo-new-violet.webp"
            alt="Afforai Logo"
          />
          Afforai
        </span>

        <span>
          Afforai is your research tool in to damn near anything. Helping you
          summarize, translate, and withdraw data from documents
        </span>

        <span>Copyright © {year} Afforai Inc. All rights reserved.</span>

        <span>
          <a
            target="_blank"
            href="https://www.producthunt.com/products/afforai?utm_source=badge-top-post-badge&utm_medium=badge#afforai"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=403202&theme=light&period=daily"
              alt="Afforai - Summarize, interact, translate your documents with AI | Product Hunt"
              width={200}
            />
          </a>
        </span>

        <h6>Backed by</h6>
        <img
          src="https://afforai.com/img/logos/sputnikatx.png"
          width={137}
          alt="Sputnik ATX VC"
          className="mb-md-0 mb-5"
        />
      </div>

      <ListInformation title="Company" items={companyInformation} />
      <ListInformation title="Resources" items={resources} />
      <ListInformation title="Follow Us" items={socialInformation} />
      <ListInformation title="Language" items={language} />
    </FooterWrapper>
  );
};

const ListInformation = ({
  title,
  items,
}: {
  title: string;
  items: Record<string, string>[];
}) => (
  <div className="col-md-2 col-6 mb-4">
    <Title className="mb-4">{title}</Title>
    <ul>
      {items?.map((item) => (
        <li key={item.title}>
          <a href={item.link} target="_blank">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
