import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { icons } from "../assets/images";
import Layout from "../components/Layout";
import { Avatar, IconButton } from "@mui/material";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex-1 flex">
        <div className="w-[77px] h-full pt-[13px] pl-[13px] border-r border-r-[#D9D9D9]">
          <img src={icons.logo} alt="logo" width={42} height={42} />
          <img
            src={icons.home}
            alt="home"
            width={52}
            height={52}
            className="object-contain mt-7 cursor-pointer"
          />
        </div>
        <div className="flex-1 h-full flex flex-col">
          {/* header */}
          <div className="w-full py-4 px-5 flex items-center">
            <div className="flex-1 flex justify-center">
              <div className="flex items-center bg-[#F1F1F1] w-full max-w-[480px] h-[38px] rounded-md pr-[10px]">
                <input
                  placeholder="Search here"
                  className="bg-transparent h-full w-full px-[14px] outline-none"
                />
                <SearchOutlinedIcon />
              </div>
            </div>
            <div className="flex items-center">
              <p className="pr-2 text-[#1B1B1B] text-[13px] font-normal tracking-[0.2px]">
                Amol Singh
              </p>
              <Avatar
                src="https://gravatar.com/avatar/f8caf88132dfd46ab8c44e5fe966a34c?s=400&d=robohash&r=x"
                className="!w-8 !h-8 mr-2 border border-[#D9D9D9]"
              />
              <IconButton>
                <NotificationsIcon className="text-black" />
              </IconButton>
            </div>
          </div>
          {/* end of header */}
          {/* content */}
          <div className="px-10">
            <div className="bg-[#EDF2F8] rounded-lg p-[22px]">
              <p className="text-[#909090] text-2xl font-semibold !leading-[34px]">
                Hi Amol 👋,{" "}
              </p>
              <p className="text-2xl font-semibold !leading-[34px]">
                There are <span className="text-[#325EFF]">99</span> active
                cases to be processed
              </p>
              <p className="text-2xl font-semibold !leading-[34px]">
                totalling <span className="text-[#325EFF]">₹ 420 crores</span>.
              </p>
            </div>
          </div>
          {/* end of content */}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
