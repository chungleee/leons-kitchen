/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../../../../theme";
import React from "react";
import { Formik } from "formik";
import InputField from "../../../../common/InputField";
import Button from "../../../../common/Button";

const styles = {
  formControl: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem"
  },
  label: { marginBottom: "0.5rem" },
  selectWrapper: {
    border: "1px solid black",
    padding: "0.5rem",
    "&:hover, :focus-within": {
      backgroundColor: `${theme.color.highlight}`,
      select: {
        backgroundColor: `${theme.color.highlight}`
      }
    }
  },
  select: {
    backgroundColor: "white",
    border: "none",
    height: "1.5rem",
    outlineColor: "white",
    width: "100%",
    textTransform: "capitalize",
    "&:hover, :focus": {
      backgroundColor: `${theme.color.highlight}`,
      outline: "none"
    }
  }
};

const initialValues = {
  title: "",
  category: "",
  price: ""
};

const categories = ["starter", "platter", "beverage", "dessert", "custom"];

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

              <div css={styles.formControl}>
                <label css={styles.label}>Role:</label>
                <div css={styles.selectWrapper}>
                  <select
                    value={values.category}
                    name="category"
                    onChange={handleChange}
                    css={styles.select}
                  >
                    <option>Select</option>
                    {categories.map((category, idx) => {
                      return (
                        <option key={Date.now() + idx} value={category}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <InputField
                name="price"
                value={values.price}
                type="tel"
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