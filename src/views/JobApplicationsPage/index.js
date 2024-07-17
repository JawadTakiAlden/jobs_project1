import { Box, Divider, Link as MuiLink, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const jobPositions = [
  {
    id: 1,
    jobTitle: "React Front-end Developer",
    jobDescription:
      "We are looking for a creative React front-end developer to join our great team. You will be responsible for building and maintaining web applications.",
  },
  {
    id: 2,
    jobTitle: "Full-Stack Developer",
    jobDescription:
      "Join our team as a full-stack developer. You will work on both client-side and server-side applications to create robust software solutions.",
  },
  {
    id: 3,
    jobTitle: "UI/UX Designer",
    jobDescription:
      "We need a talented UI/UX designer to create intuitive and visually appealing user interfaces for our web and mobile applications.",
  },
  {
    id: 4,
    jobTitle: "Backend Developer",
    jobDescription:
      "Seeking a skilled backend developer to build and maintain server-side logic, ensuring high performance and responsiveness to requests from the front-end.",
  },
  {
    id: 5,
    jobTitle: "DevOps Engineer",
    jobDescription:
      "We are looking for a DevOps engineer to manage our infrastructure and ensure continuous integration and delivery of software.",
  },
  {
    id: 6,
    jobTitle: "Product Manager",
    jobDescription:
      "As a product manager, you will be responsible for defining product vision, strategy, and roadmap, and working closely with engineering teams to deliver products.",
  },
  {
    id: 7,
    jobTitle: "Data Scientist",
    jobDescription:
      "We need a data scientist to analyze large amounts of raw information to find patterns and build data-driven models to aid business decisions.",
  },
  {
    id: 8,
    jobTitle: "Quality Assurance Engineer",
    jobDescription:
      "Join our team as a QA engineer to ensure that our products meet quality standards before they reach our customers.",
  },
  {
    id: 9,
    jobTitle: "Mobile App Developer",
    jobDescription:
      "We are looking for a mobile app developer to create and maintain mobile applications for Android and iOS platforms.",
  },
  {
    id: 10,
    jobTitle: "Systems Analyst",
    jobDescription:
      "As a systems analyst, you will examine current systems, identify problems, and propose solutions to improve business efficiency.",
  },
  {
    id: 11,
    jobTitle: "Network Engineer",
    jobDescription:
      "Seeking a network engineer to design, implement, and manage our network infrastructure, ensuring optimal performance and security.",
  },
  {
    id: 12,
    jobTitle: "Cybersecurity Specialist",
    jobDescription:
      "We need a cybersecurity specialist to protect our systems and networks from cyber threats and ensure data integrity and confidentiality.",
  },
  {
    id: 13,
    jobTitle: "Database Administrator",
    jobDescription:
      "Join our team as a database administrator to manage and maintain our database systems, ensuring data availability and performance.",
  },
  {
    id: 14,
    jobTitle: "Technical Support Specialist",
    jobDescription:
      "We are looking for a technical support specialist to provide help and advice to people and organizations using computer software or equipment.",
  },
  {
    id: 15,
    jobTitle: "Project Manager",
    jobDescription:
      "As a project manager, you will oversee projects from conception through to completion, ensuring they are delivered on time and within budget.",
  },
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
