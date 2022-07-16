import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { FaBars, FaHome } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { IoIosPaper } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  const logoAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      animate={{
        width: isOpen ? "230px" : "80px",
        transition: { duration: 0.5, type: "spring", damping: 10 },
      }}
      className="sideBar"
    >
      <div className="top_section">
        <AnimatePresence>
          {isOpen && (
            <motion.h1
              variants={logoAnimation}
              initial="hidden"
              animate="show"
              className="logo"
            >
              HireHub
            </motion.h1>
          )}
        </AnimatePresence>
        <div className={isOpen ? "bars_low" : "bars"}>
          <FaBars onClick={toggle} style={{ cursor: "pointer" }} />
        </div>
      </div>

      <section className="routes">
        <NavLink
          activeClassName="active"
          to="/employer/dashboard"
          key="Dashboard"
          className="link"
        >
          <div className={!isOpen ? "bars" : "icon"}>
            <FaHome />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                className="link_text"
              >
                Dashboard
              </motion.div>
            )}
          </AnimatePresence>
        </NavLink>
        <NavLink
          activeClassName="actives"
          to="/employer/candidates"
          key="Candidates"
          className="link"
        >
          <div className={!isOpen ? "bars" : "icon"}>
            <ImUsers />
          </div>
          {isOpen && (
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              className="link_text"
            >
              Candidates
            </motion.div>
          )}
        </NavLink>
        <NavLink
          activeClassName="actives"
          to="/employer/career"
          key="Career"
          className="link"
        >
          <div className={!isOpen ? "bars" : "icon"}>
            <IoIosPaper />
          </div>
          {isOpen && (
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              className="link_text"
            >
              Career Page
            </motion.div>
          )}
        </NavLink>
        <NavLink
          activeClassName="actives"
          to="/employer/setting"
          key="Setting"
          className="link"
        >
          <div className={!isOpen ? "bars" : "icon"}>
            <AiFillSetting />
          </div>
          {isOpen && (
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              className="link_text"
            >
              Setting
            </motion.div>
          )}
        </NavLink>
      </section>
    </motion.div>
  );
};

export default Sidebar;
