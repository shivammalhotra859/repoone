import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
    Button,
    Dialog,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import ComboBox from "./ComboBox";
import { useState } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DialogComponent from "./DialogComponent";
const rows = [
    {
        id: '1',
        name: 'Amol Singh',
        branch: 'Delhi',
        email: 'amol.singh@abfl.in',
    },
    {
        id: '21',
        name: 'Vijay Singh',
        branch: 'Mumbai',
        email: 'amolashoksingh@abfl.in',
    },
]

const AssignTable = () => {
    const [open, setOpen] = useState(true);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const [selected, setSelected] = useState({ label: 'Pulp Fiction', year: 1994 });
    return (
        <div className="mx-auto w-full" style={{ maxWidth: 800 }}>
            <button onClick={handleClickOpen}>open</button>
            <DialogComponent
                handleClose={handleClose}
                open={open}
            >
                <div className="assign-table px-5 py-4">
                    <h3 className="text-lg font-semibold">Assignes To</h3>
                    <div className="mt-4">
                        <ComboBox
                        // initialValue={'Pulp Fiction'}
                        // onchange={(e, newValue: object): void => { console.log(newValue) }}
                        // optionsList={[{}]}

                        />

                    </div>


                    {/* table */}
                    <div className="mt-4 rounded-lg border border-[#DADCE0]">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        width={184}
                                        className="h-11 px-2 py-[5px] !border-b-[#9AA9DF] !font-semibold !text-[11px] border-r border-r-[#D8D8D8] !px-3"
                                    >
                                        Name
                                    </TableCell>
                                    <TableCell
                                        width={80}
                                        className="h-11 px-2 py-[5px] !border-b-[#9AA9DF] !font-semibold !text-[11px] border-r border-r-[#D8D8D8] !px-3"
                                    >
                                        Branch
                                    </TableCell>
                                    <TableCell
                                        width={100}
                                        className="h-11 px-2 py-[5px] !border-b-[#9AA9DF] !font-semibold !text-[11px] border-r border-r-[#D8D8D8] !px-3"
                                    >
                                        Email
                                    </TableCell>
                                    <TableCell
                                        width={123}
                                        className="h-11 px-2 py-[5px] !border-b-[#9AA9DF] !font-semibold !text-[11px] border-r border-r-[#D8D8D8] !px-3"
                                    >
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows?.map((row, rowIdx) => (
                                    <TableRow
                                        key={row.id}
                                        className={rowIdx !== rows?.length - 1 ? "border-b" : ""}
                                    >
                                        <TableCell className="h-11 px-2 py-[5px] !border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                                            {row?.name}
                                        </TableCell>
                                        <TableCell className="h-11 px-2 py-[5px] !border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                                            {row.branch}
                                        </TableCell>
                                        <TableCell className="h-11 px-2 py-[5px] !border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                                            {row.email}
                                        </TableCell>
                                        <TableCell className="h-11 px-2 py-[5px] !border-b-0 !border-r !border-r-[#D8D8D8] border-dashed !font-[14px]">
                                            <Button
                                                variant="outlined"
                                                className="leading-none font-normal rounded-full border-[#00000033] hover:border-[#00000033] hover:bg-[#000000]  bg-[#000000] w-[84px] text-white text-sm normal-case px-[7px]"
                                            >
                                                <p>Allocate</p>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    {/* pagination */}
                    <div className="flex items-center justify-between mt-3">
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
            </DialogComponent>
        </div >
    );
};

export default AssignTable;
