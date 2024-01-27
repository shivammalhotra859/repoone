import {
    Button,
    IconButton,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


const rows = [
    {
        id: '1',
        pan: 'AAHCD8135B',
        applicantName: 'Omkar Shirke',
        phoneNumber: '9876543210',
        email: 'omkar@gmail.com',
    },

]

const ApplicationDetailsTable = () => {
    return (

        <div className="application-details-table">
            {/* table */}
            <div className="rounded-md border border-[#DADCE0]">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                width={184}
                                className="h-11 px-2 py-[5px] bg-[#ECF0F4] !border-b-[#D8D8D8] border-dashed border-dashed border-r border-r-[#D8D8D8] !font-semibold !text-[12px]  !px-3"
                            >
                                PAN
                            </TableCell>
                            <TableCell
                                width={80}
                                className="h-11 px-2 py-[5px] bg-[#ECF0F4] !border-b-[#D8D8D8] border-dashed border-dashed border-r border-r-[#D8D8D8] !font-semibold !text-[12px]  !px-3"
                            >
                                APPLICANT NAME
                            </TableCell>
                            <TableCell
                                width={100}
                                className="h-11 px-2 py-[5px] bg-[#ECF0F4] !border-b-[#D8D8D8] border-dashed border-dashed border-r border-r-[#D8D8D8] !font-semibold !text-[12px]  !px-3"
                            >
                                PHONE NUMBER
                            </TableCell>
                            <TableCell
                                width={123}
                                className="h-11 px-2 py-[5px] bg-[#ECF0F4] !border-b-[#D8D8D8] border-dashed border-dashed border-r border-r-[#D8D8D8] !font-semibold !text-[12px]  !px-3"
                            >
                                EMAIL ID
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((row, rowIdx) => (
                            <TableRow
                                key={row.id}
                                className={rowIdx !== rows?.length - 1 ? "border-b" : ""}
                            >
                                <TableCell className="h-11 px-2 py-[5px] !border-b-0 border-dashed border-dashed border-r border-r-[#D8D8D8] !font-[14px]">
                                    {row?.pan}
                                </TableCell>
                                <TableCell className="h-11 px-2 py-[5px] !border-b-0 border-dashed border-dashed border-r border-r-[#D8D8D8] !font-[14px]">
                                    {row.applicantName}
                                </TableCell>
                                <TableCell className="h-11 px-2 py-[5px] !border-b-0 border-dashed border-dashed border-r border-r-[#D8D8D8] !font-[14px]">
                                    {row.phoneNumber}
                                </TableCell>
                                <TableCell className="h-11 px-2 py-[5px] !border-b-0 border-dashed border-dashed border-r border-r-[#D8D8D8] !font-[14px]">
                                    {row.email}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            {/* pagination */}
        </div>

    );
};

export default ApplicationDetailsTable;
