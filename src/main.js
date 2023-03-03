// import Description from './CommonComponents/Description';
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Headerbottom from "./Components/Headerbottom";
import CardComponent from "./CommonComponents/Card-Component1";
import Services from "./CommonComponents/Services";
import MarketingComponent from "./CommonComponents/Card-Component2";
import Footercomponent from "./Components/Footermain";
import {
    Marketing_data,
  Technology_data,
  Explore_Products,
  Customer_innovation,
} from "./Components/Data";
import ProductsComponent from "./CommonComponents/Card-Component3";
import Training from "./Components/Training-Certification";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PowerCustomer from "./CommonComponents/Power-Customer";


function Main() {
  return (
    <>
      <Helmet>
        <title>Aws Home</title>
      </Helmet>
      <Header />
      <Headerbottom />
      <div className="CardComponent">
        <CardComponent />
      </div>
      <div className="services__list">
        <Services />
      </div>
      <h2 className="expolore-our-solutions">Explore Our Solutions</h2>

      <div className="industry">
        <div>
          <h2 id="indus">By Industry </h2>
        </div>
        <div className="Marketing_list">
          <MarketingComponent
            Marketing_data={Marketing_data}
            marketinghead={"marketing__head "}
            marketingmain={"marketing"}
            marketingpara={"marketing__para"}
          />
        </div>
      </div>
      <div className="industry">
        <div>
          <h2 id="indus">By Technology category </h2>
        </div>
        <div className="Marketing_list">
          <MarketingComponent
            Marketing_data={Technology_data}
            marketinghead={"marketing__head "}
            marketingmain={"marketing"}
            marketingpara={"marketing__para"}
          />
        </div>
      </div>

      <h2 className="expolore-our-solutions">Explore Our Products </h2>

      <div className="product_list">
        <MarketingComponent
          Marketing_data={Explore_Products}
          marketinghead={"product__head"}
          marketingmain={"product"}
        />
      </div>

      <div className="product_list">
        <ProductsComponent />
      </div>

      <Training />
      <PowerCustomer/>
      
      
      <div className="product_list">  
        <MarketingComponent
            Marketing_data={Customer_innovation}
            marketinghead={"marketing__head "}
            marketingmain={"marketing"}
            marketingpara={"marketing__para"}
          />
          </div>

         <Footercomponent/>

    </>
  );
}

export default Main;
