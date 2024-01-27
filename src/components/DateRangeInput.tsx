import { TextField } from '@mui/material';
import { Ref, forwardRef } from 'react'
import DatePicker from "react-datepicker";
import { FC } from "react";
import "react-datepicker/dist/react-datepicker.css";
interface DateRangeInputProps {
    label: string;
    handleDateChange: () => void;
    dateRange: {}[];
}
interface CustomInputProps {
    value?: string;
    onClick?: () => void;
    label: string;

}

const DateRangeInput: FC<DateRangeInputProps> = (props) => {
    const { label, handleDateChange, dateRange } = props;
    const [startDate, endDate] = dateRange;
    const CustomInput: FC<CustomInputProps> = forwardRef(({ value, onClick, label }, ref: Ref<HTMLInputElement>) => (

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
