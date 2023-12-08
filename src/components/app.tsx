import { AppWrapper } from "../assets";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";
import { ViewPort } from "./view-port";

export const App = () => {
  return (
    <AppWrapper>
      <Header />
      <ViewPort />
      <Footer />
    </AppWrapper>
  );
};
