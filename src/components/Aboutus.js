import React from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
class Aboutus extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <h1 className="text-center font-bold text-2xl">
          Welcome to the our App khao Piyo and sojao
        </h1>
        <p className="mt-2 ml-4">
          We started our app on 26 december 2022 and we offer some amazing food
          for you. This company is started by Kalpesh mahale with the guidance
          of Akshay Saini. If you have any query then you can contact us or
          write a email in contact section. To know more about us click on{" "}
          <Link to="/about/profile" className="text-blue-600">
            Owner Details
          </Link>
        </p>
        <Outlet />
      </>
    );
  }
}
export default Aboutus;
