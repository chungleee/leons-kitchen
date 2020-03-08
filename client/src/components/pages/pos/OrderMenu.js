/**@jsx jsx */
import { jsx } from "@emotion/core";
import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchFoodItems } from "../../../redux/actions/foodActions";
import Button from "../../common/Button";
import Card from "../../common/Card";
import Spinner from "../../common/Spinner/Spinner";
import FoodItem from "../../common/FoodItem";

const categories = ["starter", "platter", "beverage", "dessert"];

const OrderMenu = ({ match }) => {
  const { url } = match;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchFoodItems());
    setLoading(false);
  }, []);

  const { food_items } = useSelector(state => {
    return state.foodItemsState;
  });

  const { cart } = useSelector(state => {
    return state.foodItemsState;
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-90 center">
      <h2 className="mt3">Menu</h2>
      <div className="fixed w-90" css={{ zIndex: "1" }}>
        <nav className="mt3 flex justify-between">
          {categories.map(category => {
            return (
              <NavHashLink smooth key={category} to={`#${category}`}>
                <p className="link black">{category}</p>
              </NavHashLink>
            );
          })}
        </nav>
      </div>
      <main
        css={{
          overflowY: "scroll",
          height: "100%"
        }}
        className="mt4"
      >
        {categories.map(category => {
          return (
            <section
              key={category}
              css={{
                // padding: "2rem 1rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid lightgrey"
              }}
              id={category}
            >
              <h3
                css={{
                  textTransform: "capitalize"
                }}
              >
                {category}
              </h3>
              <div
                css={{
                  display: "flex",
                  width: "100%",
                  overflowX: "scroll",
                  padding: "1rem 0"
                }}
              >
                {food_items.map(item => {
                  return item.category === category ? (
                    <Card key={item._id} item={item} />
                  ) : null;
                })}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );

  // return (
  //   <div>
  //     <div
  //       css={{
  //         display: "flex",
  //         height: "100vh"
  //       }}
  //     >
  //       <main
  //         css={{
  //           width: "75%",
  //           overflowY: "scroll",
  //           height: "100%",
  //           borderRight: "0.5px solid lightgrey"
  //         }}
  //       >
  //         <nav
  //           css={{
  //             display: "flex",
  //             justifyContent: "center",
  //             marginTop: "1rem"
  //           }}
  //         >
  //           {categories.map(category => {
  //             return (
  //               <NavHashLink
  //                 smooth
  //                 css={{
  //                   textTransform: "capitalize",
  //                   margin: "0 1rem",
  //                   color: "black",
  //                   textDecoration: "none",
  //                   "&:focus": {
  //                     color: "red",
  //                     textDecoration: "underline"
  //                   },
  //                   "&:hover": {
  //                     color: "red",
  //                     textDecoration: "underline",
  //                     transform: "scale(1.2)",
  //                     transition: "all .3s ease-in-out"
  //                   }
  //                 }}
  //                 key={category}
  //                 to={`#${category}`}
  //               >
  //                 <h2>{category}</h2>
  //               </NavHashLink>
  //             );
  //           })}
  //         </nav>

  // {categories.map(category => {
  //   return (
  //     <section
  //       key={category}
  //       css={{
  //         padding: "2rem 1rem",
  //         borderBottom: "1px solid lightgrey"
  //       }}
  //       id={category}
  //     >
  //       <h3
  //         css={{
  //           textTransform: "capitalize"
  //         }}
  //       >
  //         {category}
  //       </h3>
  //       <div
  //         css={{
  //           display: "flex",
  //           width: "100%",
  //           overflowX: "scroll",
  //           padding: "1rem 0"
  //         }}
  //       >
  //         {food_items.map(item => {
  //           return item.category === category ? (
  //             <Card key={item._id} item={item} />
  //           ) : null;
  //         })}
  //       </div>
  //     </section>
  //   );
  // })}
  //       </main>
  //       <aside
  //         css={{
  //           width: "25%"
  //         }}
  //       >
  //         <div
  //           css={{
  //             display: "flex",
  //             flexDirection: "column",
  //             height: "100%"
  //           }}
  //         >
  //           <div css={{ overflowY: "scroll" }}>
  //             {cart.length === 0 ? (
  //               <div css={{ padding: "1rem", textAlign: "center" }}>
  //                 <p>What are you craving?</p>
  //               </div>
  //             ) : (
  //               cart.map(i => {
  //                 return (
  //                   <FoodItem
  //                     key={i._id}
  //                     _id={i._id}
  //                     title={i.title}
  //                     price={i.price}
  //                     count={i.count}
  //                   />
  //                 );
  //               })
  //             )}
  //           </div>
  //           <Button type="button" css={{ marginTop: "auto" }}>
  //             <Link
  //               css={{ color: "black", textDecoration: "none" }}
  //               to={{
  //                 pathname: cart.length !== 0 ? `${url}/checkout` : `${url}`
  //               }}
  //             >
  //               Confirm & Checkout
  //             </Link>
  //           </Button>
  //         </div>
  //       </aside>
  //     </div>
  //   </div>
  // );
};

export default OrderMenu;
