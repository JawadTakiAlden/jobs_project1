import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  jobTitle: Yup.string().required("مطلوب"),
  companyName: Yup.string().required("مطلوب"),
  requiredDegree: Yup.string().required("مطلوب"),
  yearsOfExperience: Yup.number()
    .min(0, "يجب أن تكون 0 أو أكبر")
    .required("مطلوب"),
  date: Yup.date().required("مطلوب"),
  jobType: Yup.string().required("مطلوب"),
  jobDescription: Yup.string().required("مطلوب"),
});

const CreateNewPost = () => {
  const initialValues = {
    jobTitle: "",
    companyName: "",
    requiredDegree: "",
    yearsOfExperience: "",
    jobType: "",
    jobDescription: "",
  };

  const CreateNewPostHandeler = (values) => {
    console.log(values);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
        }}
      >
        <Formik
          onSubmit={CreateNewPostHandeler}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.jobTitle && !!touched.jobTitle}
              >
                <InputLabel>Job Title</InputLabel>
                <OutlinedInput
                  name="jobTitle"
                  label="Job Title"
                  value={values.jobTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.jobTitle && !!touched.jobTitle && (
                  <FormHelperText error>{errors.jobTitle}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.companyName && !!touched.companyName}
              >
                <InputLabel>Company Name</InputLabel>
                <OutlinedInput
                  name="companyName"
                  label="Company Name"
                  value={values.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.companyName && !!touched.companyName && (
                  <FormHelperText error>{errors.companyName}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.jobType && !!touched.jobType}
              >
                <InputLabel>job Type</InputLabel>
                <OutlinedInput
                  name="jobType"
                  label="Job Type"
                  value={values.jobType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.jobType && !!touched.jobType && (
                  <FormHelperText error>{errors.jobType}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.jobDescription && !!touched.jobDescription}
              >
                {/* <InputLabel>job Description</InputLabel> */}
                <TextField
                  multiline
                  minRows={3}
                  name="jobDescription"
                  label="Job Description"
                  value={values.jobDescription}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.jobDescription && !!touched.jobDescription && (
                  <FormHelperText error>{errors.jobDescription}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.requiredDegree && !!touched.requiredDegree}
              >
                <InputLabel>Required Degree</InputLabel>
                <OutlinedInput
                  name="requiredDegree"
                  label="Required Degree"
                  value={values.requiredDegree}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.requiredDegree && !!touched.requiredDegree && (
                  <FormHelperText error>{errors.requiredDegree}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.yearsOfExperience && !!touched.yearsOfExperience}
              >
                <InputLabel>Required Years Of Experince</InputLabel>
                <OutlinedInput
                  name="yearsOfExperience"
                  label="Required Years Of Experince"
                  value={values.yearsOfExperience}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.yearsOfExperience && !!touched.yearsOfExperience && (
                  <FormHelperText error>{errors.yearsOfExperience}</FormHelperText>
                )}
              </FormControl>
              <LoadingButton
                variant="contained"
                fullWidth
                type="submit"
              >
                publish the job post
              </LoadingButton>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateNewPost;
