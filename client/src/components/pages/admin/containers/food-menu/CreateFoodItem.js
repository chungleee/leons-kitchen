import React from "react";
import { Formik } from "formik";
import InputField from "../../../../common/InputField";
import Button from "../../../../common/Button";

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
        {({ handleSubmit, handleChange, values, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <InputField
                name="title"
                value={values.title}
                type="text"
                onChange={handleChange}
                label="Title:"
              />

              <InputField
                name="price"
                value={values.title}
                type="number"
                onChange={handleChange}
                label="Price:"
              />

              <Button type="submit">Create</Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateFoodItem;
