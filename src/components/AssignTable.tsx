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
    return (

        <div className="assign-table px-5 pt-4 pb-5">
            <h3 className="text-lg font-semibold">Assignes To</h3>
            <div className="mt-4">
                <TextField
                    fullWidth
                    variant="outlined"
                    size='small'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton><SearchOutlinedIcon /></IconButton>
                            </InputAdornment>
                        ),
                        className: '!pr-1'
                    }}

                />

            </div>


            {/* table */}
            <div className="mt-4 rounded-lg border border-[#DADCE0]">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                width={184}
                                className="h-11 px-2 py-[5px] !border-b-[#D8D8D8] !font-semibold !text-[12px]  !px-3"
                            >
                                Name
                            </TableCell>
                            <TableCell
                                width={80}
                                className="h-11 px-2 py-[5px] !border-b-[#D8D8D8] !font-semibold !text-[12px]  !px-3"
                            >
                                Branch
                            </TableCell>
                            <TableCell
                                width={100}
                                className="h-11 px-2 py-[5px] !border-b-[#D8D8D8] !font-semibold !text-[12px]  !px-3"
                            >
                                Email
                            </TableCell>
                            <TableCell
                                width={123}
                                className="h-11 px-2 py-[5px] !border-b-[#D8D8D8] !font-semibold !text-[12px]  !px-3"
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
                                <TableCell className="h-11 px-2 py-[5px] !border-b-0 border-dashed !font-[14px]">
                                    {row?.name}
                                </TableCell>
                                <TableCell className="h-11 px-2 py-[5px] !border-b-0 border-dashed !font-[14px]">
                                    {row.branch}
                                </TableCell>
                                <TableCell className="h-11 px-2 py-[5px] !border-b-0 border-dashed !font-[14px]">
                                    {row.email}
                                </TableCell>
                                <TableCell className="h-11 px-2 py-[5px] !border-b-0 border-dashed !font-[14px]">
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
        </div>

    );
};

export default AssignTable;
