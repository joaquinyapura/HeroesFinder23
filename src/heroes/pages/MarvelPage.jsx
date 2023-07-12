import { Header } from "../components/Header";
import { NavigationBar } from "../components/NavigationBar";

export const MarvelPage = () => {
  const publisher = "Marvel Comics";
  return (
    <>
      <NavigationBar />

      <Header publisher={publisher} />
    </>
  );
};
