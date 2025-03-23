import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  const products = [
    {
      name: "Features",
      link: "#",
    },
    {
      name: "Functionalities",
      link: "/functionalities",
    },
    {
      name: "FAQ",
      link: "#",
    },
  ];

  const legal = [
    {
      name: "Privacy Policy",
      link: "#",
    },
    {
      name: "Terms of Service",
      link: "#",
    },
  ];

  const community = [
    {
      icon: <FaTwitter />,
      link: "#",
    },
    {
      icon: <FaTelegram />,
      link: "#",
    },
    {
      icon: <FaDiscord />,
      link: "#",
    },
    {
      icon: <FaReddit />,
      link: "#",
    },
    {
      icon: <FaYoutube />,
      link: "#",
    },
  ];
  return (
    <div className="container mx-auto flex flex-col justify-between items-center w-full gap-10 py-10 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full items-start gap-10 p-4 lg:p-0">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">Products</div>
          <div className="gap-2 flex flex-col">
            {products.map((product) => (
              <div key={product.name}>{product.name}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">Legal</div>
          <div className="gap-2 flex flex-col">
            {legal.map((legal) => (
              <div key={legal.name}>{legal.name}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">Community</div>
          <div className="flex flex-row gap-4">
            {community.map((community, index) => (
              <div key={index}>{community.icon}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-500 text-start border-t border-gray-200 pt-4 w-full">
        &copy; 2025 MyDoge Inc. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
