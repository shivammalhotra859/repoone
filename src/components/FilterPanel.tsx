import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, FormControl, InputLabel, Select } from '@mui/material';
import DateRangeInput from './DateRangeInput';

const ITEM_HEIGHT = 60;

export default function LongMenu() {



    const [creationDate, setCreationDate] = React.useState([null, null]);
    const [updationDate, setUpdationDate] = React.useState([null, null]);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setCreationDate([null, null]);
        setUpdationDate([null, null]);
    };

    const handleCreationDate = (update: []) => {
        setCreationDate(update);
        console.log(update);

    }
    const handleUpdationDate = (update: []) => {
        setUpdationDate(update);
        console.log(update);

    }


    const stagesOptions = [
        {
            label: 'All Stages',
            value: 'ALL_STAGES'
        }
    ]

    return (
        <div>

            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                    className: 'px-5 py-6'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '23ch',
                        overflow: 'visible'
                    },


                }}
            >
                <FormControl
                    className=''
                    size='small'
                    fullWidth
                >
                    <InputLabel id="all-stages-select">All Stages</InputLabel>
                    <Select
                        // MenuProps={menuStyles}
                        labelId="all-stages"
                        id="Creationate-select"
                        placeholder='All Stages'
                        name='allStages'
                        label='All Stages'
                        value={'ALL_STAGES'}
                    >
                        {stagesOptions?.map((item) => (
                            <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <div className='mt-4'>
                    <DateRangeInput
                        label={'Creation Date'}
                        dateRange={creationDate}
                        handleDateChange={handleCreationDate}
                    />
                </div>
                <div className='mt-4'>
                    <DateRangeInput
                        dateRange={updationDate}
                        handleDateChange={handleUpdationDate}
                        label={'Last Updated Date'}
                    />
                </div>



                <div className='mt-5'>

                    <Button
                        variant="outlined"
                        className="mr-2 rounded-full border-[#00000033] hover:border-[#00000033] w-[77px] text-black text-sm normal-case px-[7px] h-8"
                    >
                        <p>Cancel</p>
                    </Button>
                    <Button
                        variant="outlined"
                        className="mr-2 rounded-full border-[#00000033] hover:border-[#00000033] hover:bg-[#000000]  bg-[#000000] w-[77px] text-white text-sm normal-case px-[7px] h-8"
                    >
                        <p>Apply</p>
                    </Button>
                </div>

            </Menu>
        </div>
    );
}