import {useState} from "react";
import {Stack, IconButton, Box, CssBaseline} from "@mui/material";
import {Build, Search, Menu} from "@mui/icons-material";
import {Drawer} from './Styled/Drawer';
import MenuContent from './Content/MenuContent'
import ConfigContent from "./Content/ConfigContent";
import SearchContent from "./Content/SearchContent";

function Sidebar(props) {

    const [open, setOpen] = useState(false);
    const [menuContent, setMenuContent] = useState(false);
    const [configContent, setConfigContent] = useState(false);
    const [searchContent, setSearchContent] = useState(false);

    function ContentHandler(ContentState) {
        const {isContentShowing, setContentState} = ContentState();

        switch (open) {
            case false:
                setOpen(true)
                setContentState(true)
                break;
            case (open && isContentShowing):
                setOpen(false)
                setContentState(false)
                break;
            case (open && !isContentShowing):
                changeContent(setContentState)
                break;
        }
    }

    function changeContent(requestedContent) {
        const contentSetStates = [setMenuContent, setConfigContent, setSearchContent]

        contentSetStates.map((setState) => setState === requestedContent ? setState(true) : setState(false));
    }

    function ClickHandler(e) {
        console.log(e.currentTarget.id)

        switch (e.currentTarget.id) {
            case 'menubtn':
                ContentHandler(() => {
                    return {isContentShowing: menuContent, setContentState: setMenuContent}
                })
                break;
            case 'configbtn':
                ContentHandler(() => {
                    return {isContentShowing: configContent, setContentState: setConfigContent}
                })
                break;
            case 'searchbtn':
                ContentHandler(() => {
                    return {isContentShowing: searchContent, setContentState: setSearchContent}
                })
                break;
        }
    }

    return (
        <Drawer variant="permanent" anchor="left" open={open}>
            <CssBaseline/>
            <Stack direction={"row"}>
                <Box flexGrow={2} sx={{mr: 5, padding: 3}}>
                    {menuContent && <MenuContent/>}
                    {configContent && <ConfigContent/>}
                    {searchContent && <SearchContent/>}
                </Box>
                <Stack spacing={2}
                       sx={{position: 'absolute', right: 0}}>
                    <IconButton color={"inherit"} id={"menubtn"} onClick={(e) => ClickHandler(e)}>
                        <Menu/>
                    </IconButton>
                    <IconButton color={"inherit"} id={"configbtn"} onClick={(e) => ClickHandler(e)}>
                        <Build/>
                    </IconButton>
                    <IconButton color={"inherit"} id={"searchbtn"} onClick={(e) => ClickHandler(e)}>
                        <Search/>
                    </IconButton>
                </Stack>
            </Stack>
        </Drawer>
    );
}

export default Sidebar;