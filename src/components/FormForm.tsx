import * as React from "react";
import {
  Formik,
  Field,
  Form,
  FormikProps,
  FormikHelpers as FormikActions
} from "formik";
import { DisplayFormikState } from "./helper";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "./skeleton.css";
import "./main.css";
import "react-datepicker/dist/react-datepicker.css";

interface Values {
  firstName: string;
  email: string;
  datepickerField: string;
}

const BasicForm: React.FC<{}> = () => (
  <div className="container">
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        datepickerField: "",
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("Required field"),
        email: Yup.string()
          .required("Required"),
      })}
      initialStatus={{
        // resetForm(); also resets this initialStatus
        sent: "nope",
        industry: ""
      }}
      onSubmit={(
        values: Values,
        { setStatus, setSubmitting, resetForm }: FormikActions<Values>
      ) => {
        console.log(values);
        setSubmitting(false); // this line should be in the commented success of the axios call
        setStatus("sent"); // this line should be in the commented success of the axios call
      }}
    >
      {({
        status,
        setStatus,
        errors,
        touched,
        isSubmitting,
        dirty,
        handleChange,
        handleBlur,
        values,
        setFieldValue
      }: FormikProps<Values>) => (
        <Form>
          <div className={status}>

            <fieldset>
              <label htmlFor="firstName">First Name</label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="John"
                type="text"
                className={
                  errors.firstName && touched.firstName
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.firstName && touched.firstName && (
                <div className="input-feedback">{errors.firstName}</div>
              )}

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

   
            </fieldset>

            <fieldset>
                        <label htmlFor="datepickerField">Date picker</label>
              <DatePicker
                name="datepickerField"
                selected={
                  values.datepickerField
                    ? new Date(values.datepickerField)
                    : null
                }
                onChange={val => setFieldValue("datepickerField", val)}
              />
              {errors.datepickerField && touched.datepickerField && (
                <div className="input-feedback">{errors.datepickerField}</div>
              )}
            </fieldset>

            <button
              type="submit"
              disabled={!dirty || isSubmitting}
              className="air-button air-button air-button--primary"
            >
              Submit {isSubmitting && <span>Sending...</span>}
            </button>
            <DisplayFormikState {...values} />
          </div>
          {console.log(status)}
          {console.log(errors)}
          {status === "sent" && <h4 className="success">Thanks!</h4>}
        </Form>
      )}
    </Formik>
  </div>
);
