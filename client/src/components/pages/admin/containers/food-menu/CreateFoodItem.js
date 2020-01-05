import React from "react";
import { Formik } from "formik";

const initialValues = {
  title: "",
  category: "",
  price: ""
};
const CreateFoodItem = props => {
  return (
    <div>
      <h1>Create food item</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log("create food item values", values);
          // remove set submitting when putting async action
          actions.setSubmitting(false);
        }}
      >
        {({ handleSubmit, handleChange }) => {
          return <form onSubmit={handleSubmit}></form>;
        }}
      </Formik>
    </div>
  );
};

export default CreateFoodItem;
