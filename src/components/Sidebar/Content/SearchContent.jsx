import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputBase,
    Paper,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Search} from "@mui/icons-material";


function SearchContent(props) {
    return (
        <Box>
            <Typography variant={"h6"} mb={1}>Search on Web</Typography>
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 240 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <Search />
            </IconButton>
        </Paper>
            <FormControl sx={{mt:2}}>
                <FormLabel id="demo-radio-buttons-group-label">Search Engines</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Google"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Google" control={<Radio />} label="Google" />
                    <FormControlLabel value="Bing" control={<Radio />} label="Bing" />
                    <FormControlLabel value="Yandex" control={<Radio />} label="Yandex" />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}

export default SearchContent;