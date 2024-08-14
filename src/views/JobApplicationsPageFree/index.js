import { Box, Divider, Link as MuiLink, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const jobPositions = [
  {
    id: 1,
    jobTitle: "React Front-end Developer",
    jobDescription:
      "We are looking for a creative React front-end developer to join our great team. You will be responsible for building and maintaining web applications.",
  }
];

const JobApplicationsPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "20px",
        rowGap: "30px",
        flexWrap: "wrap",
        alignItems : 'stretch'
      }}
    >
      {jobPositions.map((job) => {
        return (
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 20px)",
                md: "calc(33.33333% - 20px)",
                lg: "calc(25% - 20px)",
              },
              boxShadow: "0px 0px 18px -5px rgba(0,0,0,0.2)",
              p: 2,
              borderRadius: "8px",
              pb : 4,
              position :'relative'
            }}
            key={job.id}
          >
            <Typography variant="body1">{job.jobTitle}</Typography>
            <Divider />
            <Typography variant="caption" sx={{ color: "grey.600" }}>
              {job.jobDescription}
            </Typography>
            <MuiLink
              component={Link}
              to={`/jobApplications/${job.id}/applicationsSent`}
              variant="caption"
              sx={{
                display: "block",
                textDecoration : 'none',
              }}
            >
              See Applications For This Position ...
            </MuiLink>
          </Box>
        );
      })}
    </Box>
  );
};

export default JobApplicationsPage;
