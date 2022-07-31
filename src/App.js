import {Box, Stack} from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
    return (
        <Box>
            <Stack direction={"row"}>
                <Sidebar/>
                <Main/>
            </Stack>
        </Box>
    );
}

export default App;
