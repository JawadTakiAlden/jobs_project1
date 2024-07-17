import { CameraOutlined, SaveOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  styled,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import MuiImage from "../../ui-components/MuiImage";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router";

const skills = [
  {
    title: "Css",
  },
  {
    title: "Html",
  },
  {
    title: "Js",
  },
  {
    title: "Sass",
  },
  {
    title: "Material Ui",
  },
  {
    title: "Reactjs",
  },
  {
    title: "Nextjs",
  },
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CompanyForm = ({ type }) => {
  const navigate = useNavigate();
  const companyHandeler = (values) => {
    console.log({ ...values, type });
    navigate("/home");
  };
  return (
    <Box>
      <Formik
        onSubmit={companyHandeler}
        initialValues={{
          name: "",
          logo: "",
          website: "",
          email: "",
          size: "",
          service: "",
          description: "",
          governorate: "",
        }}
        validationSchema={yup.object({
          name: yup.string().required("name is required"),
          website: yup.string().required("website is required"),
          email: yup.string().email().required("email is required"),
          size: yup.string().required("size is required"),
          service: yup.string().required("service is required"),
          description: yup.string().required("description is required"),
          governorate: yup.string().required("governorate is required"),
          logo: yup.mixed().required("logo is required"),
        })}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "250px",
                  border: (theme) => `1px solid ${theme.palette.grey[500]}`,
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                component="label"
                role={undefined}
              >
                <VisuallyHiddenInput
                  type="file"
                  name="logo"
                  onBlur={handleBlur}
                  accept="image/jpg,image/png,image/jpeg"
                  onChange={(e) => {
                    setFieldValue("logo", e.target.files[0]);
                  }}
                />

                {values.logo ? (
                  <MuiImage
                    sx={{ height: "200px", textAlign: "center" }}
                    src={URL.createObjectURL(values.logo)}
                  />
                ) : (
                  <CameraOutlined fontSize="large" />
                )}
              </Box>
              {!!errors.logo && !!touched.logo && (
                <FormHelperText error>{errors.logo}</FormHelperText>
              )}
            </Box>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Compoany Name</InputLabel>
              <OutlinedInput
                label="Compoany Name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.name && !!touched.name}
                value={values.name}
                name="name"
              />
              {!!errors.name && !!touched.name && (
                <FormHelperText error>{errors.name}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                label="Email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.email && !!touched.email}
                value={values.email}
                name="email"
              />
              {!!errors.email && !!touched.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Website Link</InputLabel>
              <OutlinedInput
                label="Website Link"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.website && !!touched.website}
                value={values.website}
                name="website"
              />
              {!!errors.website && !!touched.website && (
                <FormHelperText error>{errors.website}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Governorate</InputLabel>
              <OutlinedInput
                label="Governorate"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.governorate && !!touched.governorate}
                value={values.governorate}
                name="governorate"
              />
              {!!errors.governorate && !!touched.governorate && (
                <FormHelperText error>{errors.governorate}</FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Company Size</InputLabel>
              <OutlinedInput
                label="Compoany Size"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.size && !!touched.size}
                value={values.size}
                name="size"
              />
              {!!errors.size && !!touched.size && (
                <FormHelperText error>{errors.size}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Service</InputLabel>
              <OutlinedInput
                label="Service"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.service && !!touched.service}
                value={values.service}
                name="service"
              />
              {!!errors.service && !!touched.service && (
                <FormHelperText error>{errors.service}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              {/* <InputLabel>Description</InputLabel> */}
              <TextField
                label="Description"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                multiline
                rows={6}
                error={!!errors.description && !!touched.description}
                value={values.description}
                name="description"
              />
              {!!errors.description && !!touched.description && (
                <FormHelperText error>{errors.description}</FormHelperText>
              )}
            </FormControl>
            <LoadingButton
              fullWidth
              variant="contained"
              startIcon={<SaveOutlined />}
              type="submit"
            >
              {" "}
              Finish
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const FreelancerForm = ({ type }) => {
  const navigate = useNavigate();
  const freelancerHandeler = (values) => {
    console.log({ ...values, type });
    navigate("/home");
  };
  return (
    <Box>
      <Formik
        onSubmit={freelancerHandeler}
        initialValues={{
          name: "",
          image: "",
          gender: "male",
          phone: "",
          location: "",
          bio: "",
          skills: [],
        }}
        validationSchema={yup.object({
          name: yup.string().required("name is required"),
          gender: yup.string().required("gender is required"),
          location: yup.string().required("location is required"),
          phone: yup.string().required("phone is required"),
          bio: yup.string().required("bio is required"),
          skills: yup.mixed().required("skills is required"),
          image: yup.mixed().required("image is required"),
        })}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "250px",
                  border: (theme) => `1px solid ${theme.palette.grey[500]}`,
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                component="label"
                role={undefined}
              >
                <VisuallyHiddenInput
                  type="file"
                  name="image"
                  onBlur={handleBlur}
                  accept="image/jpg,image/png,image/jpeg"
                  onChange={(e) => {
                    setFieldValue("image", e.target.files[0]);
                  }}
                />

                {values.image ? (
                  <MuiImage
                    sx={{ height: "200px", textAlign: "center" }}
                    src={URL.createObjectURL(values.image)}
                  />
                ) : (
                  <CameraOutlined fontSize="large" />
                )}
              </Box>
              {!!errors.image && !!touched.image && (
                <FormHelperText error>{errors.image}</FormHelperText>
              )}
            </Box>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Name</InputLabel>
              <OutlinedInput
                label="Name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.name && !!touched.name}
                value={values.name}
                name="name"
              />
              {!!errors.name && !!touched.name && (
                <FormHelperText error>{errors.name}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.gender && !!touched.gender}
                value={values.gender}
                name="gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
              {!!errors.email && !!touched.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Phone</InputLabel>
              <OutlinedInput
                label="Phone"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.phone && !!touched.phone}
                value={values.phone}
                name="phone"
              />
              {!!errors.phone && !!touched.phone && (
                <FormHelperText error>{errors.phone}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Location</InputLabel>
              <OutlinedInput
                label="Location"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.location && !!touched.location}
                value={values.location}
                name="location"
              />
              {!!errors.location && !!touched.location && (
                <FormHelperText error>{errors.location}</FormHelperText>
              )}
            </FormControl>
            {/* <FormControl> */}
            <Autocomplete
              multiple
              options={skills}
              getOptionLabel={(option) => option.title}
              value={values.skills}
              fullWidth
              disableCloseOnSelect
              onChange={(e, v) => {
                setFieldValue("skills", v);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  margin="dense"
                  label="Skills"
                  placeholder="Html"
                />
              )}
            />
            {/* </FormControl> */}
            <FormControl fullWidth margin="dense" color="primary">
              <TextField
                label="Bio"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                multiline
                rows={6}
                value={values.bio}
                name="bio"
              />
              {!!errors.bio && !!touched.bio && (
                <FormHelperText error>{errors.bio}</FormHelperText>
              )}
            </FormControl>
            <LoadingButton
              fullWidth
              variant="contained"
              startIcon={<SaveOutlined />}
              type="submit"
            >
              {" "}
              Finish
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const InformationForm = () => {
  const [type, setType] = useState("company");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Button
          sx={{
            width: type === "company" ? "70%" : "50%",
            borderRadius: "4px 0 0 4px",
            transition: "0.3s",
          }}
          onClick={() => {
            setType("company");
          }}
          variant={type === "company" ? "contained" : ""}
        >
          company
        </Button>
        <Button
          sx={{
            width: type === "freelancer" ? "70%" : "50%",
            borderRadius: "0px 4px 4px 0px",
            transition: "0.3s",
          }}
          onClick={() => {
            setType("freelancer");
          }}
          variant={type === "freelancer" ? "contained" : ""}
        >
          need a freelancer
        </Button>
      </Box>

      {type === "company" ? (
        <CompanyForm type={type} />
      ) : (
        <FreelancerForm type={type} />
      )}
    </Box>
  );
};

export default InformationForm;
