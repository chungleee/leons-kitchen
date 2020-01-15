/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../../../../theme";
import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import InputField from "../../../../common/InputField";
import Button from "../../../../common/Button";
import { handleCreateFoodItem } from "../../../../../redux/actions/foodActions";

const styles = {
  wrapper: {
    height: "100%",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: "auto"
  },
  form: { marginBottom: "3rem" },
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

const CreateFoodItem = ({ history }) => {
  const dispatch = useDispatch();
  return (
    <div css={styles.wrapper}>
      <h1>Create food item</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          dispatch(handleCreateFoodItem(values));
          history.push("/admin/food-menu");
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => {
          return (
            <form css={styles.form} onSubmit={handleSubmit}>
              <InputField
                name="title"
                value={values.title}
                type="text"
                onChange={handleChange}
                label="Title:"
              />

              <div css={styles.formControl}>
                <label css={styles.label}>Category:</label>
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
