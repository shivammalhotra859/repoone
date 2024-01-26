import styled from '@emotion/styled';
import { Button } from '@mui/material'
export const PrimaryButton = styled(Button)(() => ({
    padding: "5px 15px",
    fontSize: "13px",
    background: "black",
    color: "white",
    fontWeight: "400",
    textTransform: 'capitalize',
    // width: "auto",
    borderRadius: "24px",
    cursor: "pointer",
    '&:hover, &.Mui-focusVisible': {
        background: '#000001',
    },
    '&.Mui-disabled': { color: '#fff', opacity: .7 }
}));

export const SecondaryButton = styled(Button)(() => ({
    padding: "5px 15px",
    fontSize: "13px",
    border: "1px solid #00000033",
    color: "#2F2F2F",
    fontWeight: "400",
    width: "auto",
    borderRadius: "24px",
    cursor: "pointer",
    '&:hover, &.Mui-focusVisible': {
        background: '#00000011',
    },
}));
export const TertiaryButton = styled(Button)(() => ({
    padding: "5px 15px",
    fontSize: "13px",
    border: "1px solid #00000033",
    color: "#2F2F2F",
    fontWeight: "400",
    width: "auto",
    borderRadius: "6px",
    cursor: "pointer",
    '&:hover, &.Mui-focusVisible': {
        background: '#00000011',
    },
}));