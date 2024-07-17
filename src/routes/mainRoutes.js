import MainLayout from "../Layouts/MainLayout";
import HomePage from "../views/Home";
import JobApplicationSent from "../views/JobApplicationSent/JobApplicationSent";
import JobApplicationsPage from "../views/JobApplicationsPage";
import PostsPage from "../views/Posts";
import CreateNewPost from "../views/Posts/CreateNewPost";
import PostDetailPage from "../views/Posts/PostDetailPage";

export const mainRoutes = {
  path: "",
  element: <MainLayout />,
  children: [
    {
      path: "home",
      element: <HomePage />,
    },
    {
      path: "posts",
      children: [
        {
          path: "",
          element: <PostsPage />,
        },
        {
          path: "create",
          element: <CreateNewPost />,
        },
        {
          path: ":id",
          element: <PostDetailPage />,
        },
      ],
    },
    {
      path: "jobApplications",
      children: [
        {
          path: "",
          element: <JobApplicationsPage />,
        },
        {
          path: ":id",
          children: [
            {
              path: "applicationsSent",
              element: <JobApplicationSent />,
            },
          ],
        },
      ],
    },
  ],
};
