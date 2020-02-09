/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../../../../theme";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import InputField from "../../../../common/InputField";
import Button from "../../../../common/Button";
import { handleCreateFoodItem } from "../../../../../redux/actions/foodActions";
import { CreateFoodSchema } from "../../../../../utils/validation";

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
        validationSchema={CreateFoodSchema}
        onSubmit={values => {
          let formData = new FormData();

          for (const key in values) {
            if (values.hasOwnProperty(key)) {
              formData.append(key, values[key]);
            }
          }

          dispatch(handleCreateFoodItem(formData));
          history.push("/admin/food-menu");
        }}
      >
        {({ handleSubmit, handleChange, values, errors, setFieldValue }) => {
          return (
            <form
              css={styles.form}
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div css={styles.formControl}>
                <label css={styles.label} htmlFor="imageUpload">
                  Choose an image:
                </label>
                <input
                  onChange={event => {
                    handleSelectFile(event);
                    setFieldValue("imageUpload", event.target.files[0]);
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
                {errors.imageUpload ? (
                  <small>{errors.imageUpload}</small>
                ) : null}
              </div>

              <InputField
                name="title"
                value={values.title}
                type="text"
                onChange={handleChange}
                label="Title:"
                error={errors.title ? errors.title : null}
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
                {errors.category ? (
                  <small className="red">{errors.category}</small>
                ) : null}
              </div>

              <InputField
                name="price"
                value={values.price}
                type="tel"
                onChange={handleChange}
                label="Price:"
                error={errors.price ? errors.price : null}
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
