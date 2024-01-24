import { ChevronLeft, ChevronRight, ExpandMore } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const rows = [
  {
    caseNo: "137214",
    createdOn: "19-Apr-2023",
    orderId: "0013",
    oppurtunityName: "DMI121",
    applicantName: "Omkar Shirke",
    source: "ONDC-easypay",
    quoteLoanAmount: "2,00,000",
    loanAmount: "2,00,000",
    assignedTo: "Amol Singh",
    lastUpdated: "6 Jun 23, 11:12 AM",
    stage: "Applicant Details",
  },
  {
    caseNo: "137211",
    createdOn: "19-Apr-2023",
    orderId: "0016",
    oppurtunityName: "DMI124",
    applicantName: "Karuna Parikh",
    source: "ONDC-easypay",
    quoteLoanAmount: "9,00,000",
    loanAmount: "7,00,000",
    assignedTo: "Amol Singh",
    lastUpdated: "6 Jun 23, 11:12 AM",
    stage: "Underwriting",
  },
  {
    caseNo: "137210",
    createdOn: "19-Apr-2023",
    orderId: "0017",
    oppurtunityName: "DMI125",
    applicantName: "Dhruvit Shah",
    source: "ONDC-easypay",
    quoteLoanAmount: "10,00,000",
    loanAmount: "8,00,000",
    assignedTo: "Vijay Durgalli",
    lastUpdated: "6 Jun 23, 11:12 AM",
    stage: "RCU",
  },
  {
    caseNo: "137208",
    createdOn: "19-Apr-2023",
    orderId: "0019",
    oppurtunityName: "DMI127",
    applicantName: "Tanvi Shetty",
    source: "ONDC-easypay",
    quoteLoanAmount: "20,00,000",
    loanAmount: "16,00,000",
    assignedTo: "Vikas Kalp",
    lastUpdated: "6 Jun 23, 11:12 AM",
    stage: "Post Sanction",
  },
];

const DashboardTable = () => {
  const getStageColor = (val: string) => {
    switch (val) {
      case "Applicant Details":
        return "bg-[#D0F0FD] text-[#1759B6]";
      case "Underwriting":
        return "bg-[#DBE7FF] text-[#0C368A]";
      case "RCU":
        return "bg-[#FFDCE5] text-error";
      case "Post Sanction":
        return "bg-[#EDE3FE] text-[#6B1CB0]";
      default:
        return "bg-[#D0F0FD] text-[#1759B6]";
    }
  };

  return (
    <div>
      <div className="mt-8 rounded-lg border border-[#DADCE0]">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                width={184}
                className="uppercase !border-b-[#9AA9DF] !font-semibold !text-[11px] border-dashed border-r border-r-[#D8D8D8] !px-3"
              >
                CASE NUMBER/ CREATED ON
              </TableCell>
              <TableCell
                width={80}
                className="uppercase !border-b-[#9AA9DF] !font-semibold !text-[11px] border-dashed border-r border-r-[#D8D8D8] !px-3"
              >
                ORDER ID
              </TableCell>
              <TableCell
                width={100}
                className="uppercase !border-b-[#9AA9DF] !font-semibold !text-[11px] border-dashed border-r border-r-[#D8D8D8] !px-3"
              >
                OPPURTUNITY NAME
              </TableCell>
              <TableCell
                width={123}
                className="uppercase !border-b-[#9AA9DF] !font-semibold !text-[11px] border-dashed border-r border-r-[#D8D8D8] !px-3"
              >
                APPLICANT NAME
              </TableCell>
              <TableCell
                width={138}
                className="uppercase !border-b-[#9AA9DF] !font-semibold !text-[11px] border-dashed border-r border-r-[#D8D8D8] !px-3"
              >
                SOURCE
              </TableCell>
              <TableCell
                width={97}
                className="uppercase !border-b-[#9AA9DF] !font-semibold !text-[11px] border-dashed border-r border-r-[#D8D8D8] !px-3"
              >
                QUOTE LOAN AMOUNT
              </TableCell>
              <TableCell
                width={104}
                className="uppercase !border-b-[#9AA9DF] !font-semibold !text-[11px] border-dashed border-r border-r-[#D8D8D8] !px-3"
              >
                LOAN AMOUNT
              </TableCell>
              <TableCell
                width={140}
                className="uppercase !border-b-[#9AA9DF] !font-semibold !text-[11px] border-dashed border-r border-r-[#D8D8D8] !px-3"
              >
                ASSIGNED TO
              </TableCell>
              <TableCell
                width={144}
                className="uppercase !border-b-[#9AA9DF] !font-semibold !text-[11px] border-dashed border-r border-r-[#D8D8D8] !px-3"
              >
                LAST UPDATED
              </TableCell>
              <TableCell
                width={148}
                className="uppercase !border-b-[#9AA9DF] !font-semibold !text-[11px] !px-3"
              >
                STAGE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIdx) => (
              <TableRow
                key={row.orderId}
                className={rowIdx !== rows?.length - 1 ? "border-b" : ""}
              >
                <TableCell className="!border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                  <div className="text-primary">{row?.caseNo}</div>
                  <div>Created: {row.createdOn}</div>
                </TableCell>
                <TableCell className="!border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                  {row.orderId}
                </TableCell>
                <TableCell className="!border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                  {row.oppurtunityName}
                </TableCell>
                <TableCell className="!border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                  {row.applicantName}
                </TableCell>
                <TableCell className="!border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                  {row.source}
                </TableCell>
                <TableCell className="!border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                  {row.quoteLoanAmount}
                </TableCell>
                <TableCell className="!border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                  {row.loanAmount}
                </TableCell>
                <TableCell className="!border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px] !p-0">
                  <Button className="!flex !items-center !rounded-none !justify-between !px-3 !py-6 !normal-case !text-black !font-normal !h-full !w-full">
                    {row.assignedTo}
                    <ExpandMore fontSize="small" />
                  </Button>
                </TableCell>
                <TableCell className="!border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                  {row.lastUpdated}
                </TableCell>
                <TableCell className="!border-b-0 !font-[14px] !px-3">
                  <p
                    className={`${getStageColor(
                      row.stage
                    )} text-[11px] text-center font-medium px-[6px] py-2 rounded`}
                  >
                    {row.stage}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-3">
        <p className="text-xs text-black/50">10 results of 14</p>
        <div className="flex items-center">
          <p className="text-[#172B4D] text-sm mr-1">First</p>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <input
            type="number"
            className="rounded border border-[#DBDCE0] w-7 h-7 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <IconButton>
            <ChevronRight />
          </IconButton>
          <p className="text-[#172B4D] text-sm ml-1 mr-3">Last</p>
          <p className="text-[#172B4D] text-sm">1 of 7</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
