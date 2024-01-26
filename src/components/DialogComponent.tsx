import {
    Dialog,
    IconButton,
} from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function DialogComponent(props) {
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

