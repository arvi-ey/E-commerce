import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons(props) {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant={props.variant} endIcon={props.endIcon} className={props.className} onClick={props.onClick} startIcon={props.startIcon} >
                {props.name}
            </Button>
        </Stack>
    );
}