import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBarItem from "./SidebarItem";
import "../../styles/styles.css";
import LogoutIcon from "../../assets/icons/logout.svg";
import { Box, Image, VStack } from "@chakra-ui/react";

const SideBar = ({ menu }) => {
  const location = useLocation();

  const [active, setActive] = useState(1);

  useEffect(() => {
    menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const __navigate = (id) => {
    setActive(id);
  };

  return (
    <Box minW={"300px"} h="85vh" className="sidebar">
      <Box marginTop={"50px"} className="sidebar-container">
        <VStack marginBottom={"50px"}>
          <Image
            w={"150px"}
            src={"https://i.ibb.co/t4jpfZX/PROJECT-LOGO-png.png"}
            alt="logo"
          />
        </VStack>

        <div className="sidebar-container">
          <div className="sidebar-items">
            {menu.map((item, index) => (
              <div key={item.id} onClick={() => __navigate(item.id)}>
                <SideBarItem active={item.id === active} item={item} />
              </div>
            ))}
          </div>

          <div className="sidebar-footer">
            <span className="sidebar-item-label">Logout</span>
            <img
              src={LogoutIcon}
              alt="icon-logout"
              className="sidebar-item-icon"
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default SideBar;
