import { Header } from "../components/Header";
import { NavigationBar } from "../components/NavigationBar";

export const DcPage = () => {
  const publisher = "DC Comics";
  return (
    <>
      <NavigationBar />

      <Header publisher={publisher} />
    </>
  );
};
