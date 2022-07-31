import {Box, FormControlLabel, FormGroup, Switch} from "@mui/material";

function ConfigContent(props) {
    return (
        <Box>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Switch" />
                <FormControlLabel control={<Switch />} label="Switch 2" />
                <FormControlLabel control={<Switch />} label="Switch 3" />
            </FormGroup>
        </Box>
    );
}

export default ConfigContent;