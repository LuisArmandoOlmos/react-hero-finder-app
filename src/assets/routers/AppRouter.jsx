import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { DcPage, HeroPage, LoginPage, MarvelPage, SearchPage } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="dc" element={<DcPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero" element={<HeroPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
