import React from "react";
import "../CSS/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="i'm a sidebar">
      <div className="sidebar__header">
        <Avatar src="https://cdn.discordapp.com/avatars/852671849145172009/28ea70b271628f1492d2f672d7bc2afb.webp?size=1024" />

        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>

      <div className="sidebar__search">

        <IconButton>
          <SearchIcon className="sidebar__icon" />
        </IconButton>

        <input type="text" />
      </div>

      <div className="sidebar__chats">
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
        <SidebarChat name="Diego" info="Last connected at 5 minutes" />
      </div>
    </div>
  );
};

export default Sidebar;
