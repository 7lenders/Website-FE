import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SubMenu = ({ item, handleClose }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const smoothDropdown = {
    hidden: {
      height: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
    visible: {
      height: "fit-content",
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <div>
      {item.dropdown ? (
        <div className="transition-all duration-300 flex justify-between items-center text-base text-dark rounded-lg hover:bg-slate-100 cursor-pointer">
          <Link
            onClick={handleClose}
            to={item.href}
            className="flex-grow py-4 px-4"
          >
            <span>{item.name}</span>
          </Link>
          <div
            onClick={item.dropdown && showSubnav}
            className={`transition-transform duration-300 px-4 ${
              subnav ? "rotate-180" : ""
            }`}
          >
            {item.dropdown && <ChevronDown />}
          </div>
        </div>
      ) : (
        <Link
          onClick={handleClose}
          to={item.href}
          className="transition-all duration-300 flex justify-between items-center text-base text-dark py-4 px-4 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <span>{item.name}</span>
        </Link>
      )}
      <motion.div
        initial="hidden"
        animate={subnav ? "visible" : "hidden"}
        variants={smoothDropdown}
        className="overflow-hidden flex flex-col"
      >
        {subnav &&
          item.dropdown.map((subItem, index) => (
            <Link
              to={subItem.href}
              onClick={handleClose}
              key={index}
              className="flex pl-8 items-center gap-1 text-dark"
            >
              {"-"}
              <div className="transition-all duration-300 flex justify-between items-center text-base py-2 px-3 rounded-lg hover:bg-slate-100 cursor-pointer">
                <span className="">{subItem.name}</span>
              </div>
            </Link>
          ))}
        <div className="h-2"></div>
      </motion.div>
    </div>
  );
};

export default function SidebarComp({ data, handleClose }) {
  return (
    <motion.div className="flex flex-col divide-y divide-slate-200">
      {data.map((item, index) => (
        <SubMenu handleClose={handleClose} item={item} key={index} />
      ))}
    </motion.div>
  );
}
