import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, LoginPage, MarvelPage } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="dc" element={<DcPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/dc" />} />
      </Routes>
    </>
  );
};
