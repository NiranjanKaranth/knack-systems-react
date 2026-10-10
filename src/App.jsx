import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Industries from "./pages/industries";
import Apparel from "./pages/industries-pages/apparel";
import Footwear from "./pages/industries-pages/footwear";
import Sports from './pages/industries-pages/sports';
import ConsumerDurables from './pages/industries-pages/consumer-durables';
import Wholesale from './pages/industries-pages/wholesale';
import Manufacturing from './pages/industries-pages/manufacturing';
import IMC from './pages/industries-pages/imc';
import Chemical from './pages/industries-pages/chemical';
import HighTech from './pages/industries-pages/high-tech';
import BuildingMaterials from './pages/industries-pages/building-materials';
import LifeSciences from './pages/industries-pages/life-sciences';
import LineOfBusiness from "./pages/line-of-business";
import CPQ from "./pages/line-of-business-pages/cpq";
import ECommerce from "./pages/line-of-business-pages/e-commerce";
import B2BCommerce from "./pages/line-of-business-pages/b2b-commerce";
import B2CCommerce from "./pages/line-of-business-pages/b2c-commerce";
import Sales from "./pages/line-of-business-pages/sales";
import Service from "./pages/line-of-business-pages/service";
import Marketing from "./pages/line-of-business-pages/marketing";
import Services from "./pages/services";
import OurWorksPage from "./pages/our-works";
import InsightsNews from "./pages/insights-and-news";
import Company from "./pages/company";
import StrategyPlanning from "./pages/services-pages/strategy-and-planning";
import Implementation from "./pages/services-pages/implementation";
import SolutionDesign from "./pages/services-pages/solution-design";
import RollOutAdoption from "./pages/services-pages/roll-out-and-adoption";
import ApplicationManagedServices from "./pages/services-pages/application";
import AMS from "./pages/services-pages/commerece-ams";
import Podcasts from "./pages/insights-and-news-pages/podcasts";
import Webinars from "./pages/insights-and-news-pages/webinars";

function App() {
  return (
    <Router>
      <div className="landing-container ks-wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/apparel-and-fashion" element={<Apparel />} />
          <Route path="/industries/footwear-and-accessories" element={<Footwear />} />
          <Route path="/industries/sports" element={<Sports />} />
          <Route path="/industries/consumer-durables" element={<ConsumerDurables />} />
          <Route path="/industries/wholesale" element={<Wholesale />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/imc" element={<IMC />} />
          <Route path="/industries/chemical" element={<Chemical />} />
          <Route path="/industries/hightech" element={<HighTech />} />
          <Route path="/industries/building-materials" element={<BuildingMaterials />} />
          <Route path="/industries/life-sciences" element={<LifeSciences />} />
          <Route path="/line-of-business" element={<LineOfBusiness/>} />
          <Route path="/line-of-business/e-commerce" element={<ECommerce />} />
          <Route path="/line-of-business/b2b-commerce" element={<B2BCommerce />} />
          <Route path="/line-of-business/b2c-commerce" element={<B2CCommerce />} />
          <Route path="/line-of-business/cpq" element={<CPQ />} />
          <Route path="/line-of-business/Sales" element={<Sales />} />
          <Route path="/line-of-business/Service" element={<Service />} />
          <Route path="/line-of-business/Marketing" element={<Marketing />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/our-works" element={<OurWorksPage />} />
          <Route path="/insights-and-news" element={<InsightsNews />} />
          <Route path="/company" element={<Company />} />
          <Route path="/services/strategy-and-planning" element={<StrategyPlanning />} />
          <Route path="/services/implementation" element={<Implementation />} />
          <Route path="/services/solution-design" element={<SolutionDesign />} />
          <Route path="/services/roll-out-and-adoption" element={<RollOutAdoption />} />
          <Route path="/services/Application" element={<ApplicationManagedServices />} />
          <Route path="/services/ams" element={<AMS />} />
          <Route path="/insights-and-news/podcasts" element={<Podcasts />} />
          <Route path="/insights-and-news/webinars" element={<Webinars />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
