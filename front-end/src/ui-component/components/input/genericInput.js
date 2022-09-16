// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { bgcolor } from '@mui/system';

const GenericInput = ({label, type, name, values, handleChange, style, errorMsg, error}) => {
    const theme = useTheme();

    // const user = (JSON.parse(localStorage.getItem('profile')));

    return (
        <FormControl error={Boolean(error)} sx={[ style ]}>
            <InputLabel htmlFor="outlined-adornment-email-login">{label}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-email-login"
                type={type}
                value={values}
                name={name}
                // onBlur={handleBlur}
                onChange={handleChange}
                label={label}
                inputProps={{}}
            />
            {error && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errorMsg}
                </FormHelperText>
            )}
        </FormControl>
    )
}

export default GenericInput
