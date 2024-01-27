import {
    Dialog,
    IconButton,
} from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FC, ReactNode } from "react";

interface DialogComponentProps {
    children: ReactNode;
    handleClose: () => void;
    open: boolean;

}

const DialogComponent: FC<DialogComponentProps> = (props) => {
    const { children, handleClose, open } = props;
    return (
        <Dialog fullWidth maxWidth={'md'} open={open} onClose={handleClose}>
            <IconButton size="small" className="absolute top-2 right-2" onClick={handleClose}>
                <CloseRoundedIcon className="text-black" />
            </IconButton>
            {children}
        </Dialog>
    )
}
export default DialogComponent

