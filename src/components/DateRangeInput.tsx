import { TextField } from '@mui/material';
import { forwardRef } from 'react'
import DatePicker from "react-datepicker";
import { FC } from "react";
import "react-datepicker/dist/react-datepicker.css";
export interface DateRangeInputProps { }
const DateRangeInput: FC<DateRangeInputProps> = ({ label, handleDateChange, dateRange }) => {

    const [startDate, endDate] = dateRange;

    const CustomInput = forwardRef(({ value, onClick, label }, ref) => (

        <TextField
            autoComplete='off'
            fullWidth
            variant="outlined"
            size='small'
            label={label}
            onClick={onClick}
            ref={ref}
            value={value}
            sx={{ width: 230 }}

        />
    ));
    return (
        <>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateChange}
                customInput={<CustomInput label={label} />}
            // isClearable={true}
            />
        </>
    );
};


export default DateRangeInput
