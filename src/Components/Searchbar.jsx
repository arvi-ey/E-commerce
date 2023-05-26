// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { InputAdornment } from '@mui/material';

// export default function FullWidthTextField(props) {
//     return (
//         <Box
//             sx={{
//                 width: 500,
//                 maxWidth: '100%',
//             }}
//         >
//             <TextField
//                 fullWidth label={props.label}
//                 id="fullWidth"
//                 //   <InputAdornment position='end'>ICON</InputAdornment>
//                 sx={{ outline: "yellow" }}
//             />
//         </Box>
//     );
// }

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOption(props) {
    const [value, setValue] = React.useState(null);

    return (
        <Autocomplete

            value={value}
            onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                    setValue({
                        title: newValue,
                    });
                } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                        title: newValue.inputValue,
                    });
                } else {
                    setValue(newValue);
                }
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === option.title);
                if (inputValue !== '' && !isExisting) {
                    filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                    });
                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={items}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                    return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                    return option.inputValue;
                }
                // Regular option
                return option.title;
            }}
            renderOption={(props, option) => <li  {...props}>{option.title}</li>}
            sx={{ width: 500, border: "none" }}
            freeSolo
            renderInput={(params) => (
                <TextField {...params} label={props.label} />
            )}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const items = [
    { title: "Mobile phone" },
    { title: "Man's cloth" },
    { title: "Woman's cloth" },
    { title: "Children's item" },
    { title: "Woman's shoes" },
    { title: "Man's shoes" },
];