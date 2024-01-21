import { Tab, Tabs } from "@mui/material";
import { ReactNode, SyntheticEvent } from "react";

interface ITabNav {
  value: number;
  handleChange: (ent: SyntheticEvent, value: number) => void;
  items: { label: string | ReactNode; value: number }[];
}

const TabNav = (props: ITabNav) => {
  return (
    <div className="border-b border-b-[rgba(134,134,147, 0.3)]">
      <Tabs
        value={props.value}
        onChange={props.handleChange}
        classes={{
          indicator: "!bg-[#325EFF] !h-1",
        }}
      >
        {props.items?.map((item) => (
          <Tab
            className="!p-0 !text-[15px] !text-[#1A1A1A] !normal-case !font-semibold !justify-end"
            label={item?.label}
            value={item?.value}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TabNav;
