import { ChatOutlined, HomeOutlined, PostAddOutlined, WorkOutlined } from "@mui/icons-material";

export const menuItems = [
    {
        id : 1,
        header : "Home",
        path : '/home',
        icon : <HomeOutlined />
    },
    {
        id : 2,
        header : "Posts",
        path : '/posts',
        icon : <PostAddOutlined />
    },
    {
        id : 3,
        header : "Job Application",
        path : '/jobApplications',
        icon : <WorkOutlined />
    },
    {
        id : 4,
        header : "Chat",
        path : '/chat',
        icon : <ChatOutlined />
    },
]