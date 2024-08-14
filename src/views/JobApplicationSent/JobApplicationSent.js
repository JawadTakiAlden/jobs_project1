import { FileDownloadOutlined } from "@mui/icons-material";
import { alpha, Box, Button, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useGetJobApplicationSent from "../../apis/useGetJobApplicationSent";

const JobApplicationSent = () => {

const applicatins = useGetJobApplicationSent()

if(applicatins.isLoading){
  return <p>Loading...</p>
}

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        rowGap: "20px",
        columnGap: "10px",
        flexWrap: "wrap",
      }}
    >
      {applicatins.data.data.applications.map((application, i) => {
        return (
          <Box
            key={i}
            sx={{
              borderRadius: "8px",
              boxShadow: (theme) =>
                `0px 0px 15px -5px ${alpha(theme.palette.primary.main, 0.3)}`,
              width: {
                xs: "calc(100%)",
                sm: "calc(50% - 10px)",
                md: "calc(33.33333% - 10px)",
                lg: "calc(25% - 10px)",
              },
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box className={"content"}>
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  px: 1,
                  flex: 1,
                }}
              >
                <Link
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  component={"a"}
                  href={application.cv_url}
                >
                  {application.user_full_name}
                </Link>{" "}
                <Typography variant="caption">{application.date}</Typography>
              </Typography>
              <Typography
                sx={{
                  px: 1,
                  mb: 1,
                }}
                variant="body2"
              >
                {application.job_title}
              </Typography>
              <Typography
                sx={{
                  px: 1,
                  mb: 2,
                }}
                variant="body2"
                color="text.secondary"
              >
                Status: {application.status}
              </Typography>
              <Button
                sx={{
                  mb: 2,
                  mx: 1,
                }}
                startIcon={<FileDownloadOutlined />}
                variant="outlined"
                color="secondary"
                component={"a"}
                href={application.cv_url}
              >
                Download CV
              </Button>
            </Box>

            <Box
              className={"actions"}
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                backgroundColor: "grey.100",
                p: 1,
              }}
            >
              <Button color="success">
                Accept
              </Button>
              <Button color="error">
                Reject
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default JobApplicationSent;
