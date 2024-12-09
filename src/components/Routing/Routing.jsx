import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CounDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Layout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="details/:coinId" element={<CounDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
