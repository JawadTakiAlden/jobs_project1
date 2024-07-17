import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const MobileChat = () => {
  return <Box>MobileChat</Box>;
};

const WebChat = () => {
  return <Box>WebChat</Box>;
};

const Chat = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      {/* {isMobile ? (
        <MobileChat />
      ) : (
        <Box>
          <WebChat />
        </Box>
      )} */}
      chats
    </Box>
  );
};

export default Chat;
