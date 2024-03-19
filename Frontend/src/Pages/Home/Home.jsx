import React from "react";
import "./Home.css";
import NavBar from "../../Components/NavBar/NavBar";
import Header from "./../../Components/header/Header";
import Features from "../../Components/featured/Features";
import PropertyList from "../../Components/prpertyList/PropertyList";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Features />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
