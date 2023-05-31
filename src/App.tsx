import {Navbar} from "./Navbar/Navbar";
import {ToolsBlock} from "./ToolsBlock/ToolsBlock";
import {Spacer} from "./primitives";

export const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Spacer space={30}/>
            <ToolsBlock/>
        </div>
    )
}