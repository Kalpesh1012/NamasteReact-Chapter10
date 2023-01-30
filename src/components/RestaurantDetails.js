import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_LINK } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { uniqueid } = useParams();

  const restaurantdetail = useRestaurantDetails(uniqueid);
  return !restaurantdetail ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <div className="mt-6 ml-44 h-96 w-60 border-4">
          <img
            src={IMG_CDN_LINK + restaurantdetail.cloudinaryImageId}
            className="h-40 w-52 ml-3 mt-2"
          />
          <h1 className="font-bold text-2xl ml-2">{restaurantdetail.name}</h1>
          <h3 className="ml-2">City:{restaurantdetail.city}</h3>
          <h3 className="ml-2">Area:{restaurantdetail.area}</h3>
          <h3 className="ml-2">{restaurantdetail.avgRating} Rating</h3>
        </div>
        <div className="ml-[400]">
          <h2 className="font-bold text-3xl pb-2 ">Menu</h2>
          <ul>
            {Object.values(restaurantdetail.menu.items).map((items) => {
              return <li key={items.id}>{items.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantDetails;
