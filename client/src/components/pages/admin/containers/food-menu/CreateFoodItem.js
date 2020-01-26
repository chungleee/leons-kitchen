/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../../../../theme";
import React from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import InputField from "../../../../common/InputField";
import Button from "../../../../common/Button";
import { handleCreateFoodItem } from "../../../../../redux/actions/foodActions";
import { useState } from "react";

const styles = {
  wrapper: {
    height: "100%",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    margin: "auto"
  },
  form: { marginBottom: "3rem", overflowY: "auto" },
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
  price: "",
  imageUpload: ""
};

const categories = ["starter", "platter", "beverage", "dessert", "custom"];

const CreateFoodItem = ({ history }) => {
  const dispatch = useDispatch();
  const [src, setSrc] = useState(null);

  const handleSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div css={styles.wrapper}>
      <h1 css={{ marginBottom: "3rem", marginTop: "3rem" }}>
        Create food item
      </h1>
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
              <div css={styles.formControl}>
                <label css={styles.label} htmlFor="imageUpload">
                  Choose an image:
                </label>
                <input
                  onChange={event => {
                    handleSelectFile(event);
                  }}
                  type="file"
                  name="imageUpload"
                />

                {src ? (
                  <div
                    css={{
                      maxHeight: "500px",
                      maxWidth: "500px"
                    }}
                  >
                    <img
                      src={src}
                      alt={values.title}
                      css={{ height: "100%", width: "100%" }}
                    />
                  </div>
                ) : null}
              </div>
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
