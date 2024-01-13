import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormContainer,
  FormTitle,
  FormField,
  FormTextArea,
  FormButton,
} from "./Form.styled";
import Notiflix from "notiflix";

function Form({ onClose }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      price: "",
      reason: "",
      flower: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Обов'язкове поле"),
      phone: Yup.string().required("Обов'язкове поле"),
      price: Yup.string().required("Обов'язкове поле"),
      reason: Yup.string().required("Обов'язкове поле"),
      flower: Yup.string().required("Обов'язкове поле"),
      comment: Yup.string(),
    }),

    onSubmit: (values, { resetForm }) => {
      Notiflix.Notify.success("Форма успішно відправлена!");

      resetForm();
      onClose();
    },
  });

  return (
    <FormContainer>
      <FormTitle>Зробити замовлення</FormTitle>
      <form onSubmit={formik.handleSubmit}>
        <FormField>
          <label htmlFor="name">Ім'я:</label>
          <input type="text" id="name" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </FormField>

        <FormField>
          <label htmlFor="phone">Телефон:</label>
          <input type="tel" id="phone" {...formik.getFieldProps("phone")} />
          {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}
        </FormField>

        <FormField>
          <label htmlFor="price">Ціна:</label>
          <select
            id="price"
            {...formik.getFieldProps("priceRange")}
            onChange={(e) => formik.setFieldValue("price", e.target.value)}
          >
            <option value="">Оберіть діапазон</option>
            <option value="1000-1500">Від 1000 до 1500</option>
            <option value="1500-2000">Від 1500 до 2000</option>
          </select>
          {formik.touched.price && formik.errors.price ? (
            <div>{formik.errors.price}</div>
          ) : null}
        </FormField>

        <FormField>
          <label htmlFor="reason">Привід:</label>
          <select name="reason" id="reason" {...formik.getFieldProps("reason")}>
            <option value="">Оберіть привід</option>
            <option value="rose">День народження</option>
            <option value="lily">Річниця</option>
          </select>
          {formik.touched.reason && formik.errors.reason ? (
            <div>{formik.errors.reason}</div>
          ) : null}
        </FormField>

        <FormField>
          <label htmlFor="flower">Квітка:</label>
          <select id="flower" {...formik.getFieldProps("flower")}>
            <option value="">Оберіть квітку</option>
            <option value="rose">Троянда</option>
            <option value="lily">Лілія</option>
          </select>
          {formik.touched.flower && formik.errors.flower ? (
            <div>{formik.errors.flower}</div>
          ) : null}
        </FormField>

        <FormField>
          <label htmlFor="comment">Коментар:</label>
          <FormTextArea id="comment" {...formik.getFieldProps("comment")} />
          {formik.touched.comment && formik.errors.comment ? (
            <div>{formik.errors.comment}</div>
          ) : null}
        </FormField>

        <FormButton type="submit">Відправити</FormButton>
      </form>
    </FormContainer>
  );
}

export default Form;
