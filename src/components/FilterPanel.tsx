import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, FormControl, InputLabel, Select } from '@mui/material';
import { PrimaryButton, TertiaryButton } from './buttons';

// const options = [
//     'None',
//     'Atria',
//     'Callisto',
//     'Dione',
//     'Ganymede',
//     'Hangouts Call',
//     'Luna',
//     'Oberon',
//     'Phobos',
//     'Pyxis',
//     'Sedna',
//     'Titania',
//     'Triton',
//     'Umbriel',
// ];

const ITEM_HEIGHT = 60;

export default function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



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
                // anchorEl={anchorEl}
                open={true}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '22ch',
                    },
                }}
            >
                <FormControl
                    className='mt-3 bg-blue-500'
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
                <FormControl
                    className='mt-3'
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
                        )
                        )}
                    </Select>
                </FormControl>
                <FormControl
                    className='mt-3'
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
                        )
                        )}
                    </Select>
                </FormControl>
                <div className='mt-4'>

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