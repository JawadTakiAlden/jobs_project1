import { FileDownloadOutlined } from "@mui/icons-material";
import { alpha, Box, Button, Link, Typography } from "@mui/material";
import React from "react";

const applications = [
  {
    name: "John Doe",
    date: "2023/06/10",
    link: "https://www.example.com/johndoe",
  },
  {
    name: "Jane Smith",
    date: "2023/06/11",
    link: "https://www.example.com/janesmith",
  },
  {
    name: "Alice Johnson",
    date: "2023/06/12",
    link: "https://www.example.com/alicejohnson",
  },
  {
    name: "Bob Brown",
    date: "2023/06/13",
    link: "https://www.example.com/bobbrown",
  },
  {
    name: "Charlie Davis",
    date: "2023/06/14",
    link: "https://www.example.com/charliedavis",
  },
  {
    name: "Diana Evans",
    date: "2023/06/15",
    link: "https://www.example.com/dianaevans",
  },
  {
    name: "Eve Foster",
    date: "2023/06/16",
    link: "https://www.example.com/evefoster",
  },
  {
    name: "Frank Green",
    date: "2023/06/17",
    link: "https://www.example.com/frankgreen",
  },
  {
    name: "Grace Harris",
    date: "2023/06/18",
    link: "https://www.example.com/graceharris",
  },
  {
    name: "Hank Ingram",
    date: "2023/06/19",
    link: "https://www.example.com/hankingram",
  },
  {
    name: "Ivy Johnson",
    date: "2023/06/20",
    link: "https://www.example.com/ivyjohnson",
  },
  {
    name: "Jack King",
    date: "2023/06/21",
    link: "https://www.example.com/jackking",
  },
];

const JobApplicationSent = () => {
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
      {applications.map((application, i) => {
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
              "&:hover .actions": {
                display: "flex",
              },
            }}
          >
            <Box className={"content"}>
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  px: 1,
                  flex : 1
                }}
              >
                <Link sx={{
                    color : 'inherit',
                    textDecoration : 'none'
                }} component={"a"} href={application.link}>
                  {application.name}
                </Link>{" "}
                <Typography variant="caption">{application.date}</Typography>
              </Typography>
              <Button
                sx={{
                  mb: 2,
                  mx: 1,
                }}
                startIcon={<FileDownloadOutlined />}
                variant="outlined"
                color="secondary"
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
              }}
            >
              <Button color="success" >
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
