import * as React from "react";
import { Container, Typography, Grid, Button, Box } from "@material-ui/core";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import { TextArea } from "./TextArea";
import { FormTextField } from "./FormTextField";
import * as yup from "yup";
import { useAppSelector } from "@/hooks/redux";

interface FormValues {
  title: string;
  description: string;
  date: Date;
}

const validationSchema = yup.object().shape({
  title: yup.string().required("Required").min(2, "too short"),
  description: yup.string().required("Required").min(2, "too short"),
  date: yup.date().nullable()
});

export default function App() {
    const { chosenMonth, chosenDay } = useAppSelector(
        (state) => state.calendar
      );
  return (
    <Container maxWidth="md">
      <Box mb={3} pt={5}>
        <Typography
          variant="h4"
          style={{ lineHeight: 1.25, marginBottom: 16 }}
        >
          Add new idea item
        </Typography>
      </Box>
      <Formik
        initialValues={{
          title: "",
          description: "",
          date: new Date(),
        }}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          formikHelpers: FormikHelpers<FormValues>
        ) => {
          alert(JSON.stringify(values, null, 2));
          formikHelpers.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name="title"
                  label="Title"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="description"
                  label="Description"
                  size="large"
                  component={TextArea}
                  fullWidth
                />
              </Grid>
              <Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  size="large"
                  color="primary"
                  disabled={formikProps.isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}