import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function PositionedSnackbar(props) {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'left',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>

            <Button
                onClick={handleClick({
                    vertical: 'buttom',
                    horizontal: 'left',
                })}

                className={props.className}
            >

                {props.name}
            </Button>

        </React.Fragment>
    );

    return (
        <div>
            {buttons}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={props.description}
                key={vertical + horizontal}
                autoHideDuration={1000}
            />
        </div>
    );
} 