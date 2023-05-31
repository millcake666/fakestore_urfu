import {Flex, Spacer} from "../primitives";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

export const ToolsBlock = () => {
    return (
        <div>
            <Flex justifyContent={"end"}>
                <TextField label="Поиск товара" variant="outlined"/>
                <Spacer width={30}/>
                <FormControl variant="outlined">
                    <InputLabel id="sort-label">Сортировка</InputLabel>
                    <Select labelId="sort-label" label="Сортировка" defaultValue={"priceDesc"}>
                        <MenuItem value="priceAsc">По цене (возрастание)</MenuItem>
                        <MenuItem value="priceDesc">По цене (убывание)</MenuItem>
                        <MenuItem value="alphabeticalAsc">По алфавиту (возрастание)</MenuItem>
                        <MenuItem value="alphabeticalDesc">По алфавиту (убывание)</MenuItem>
                    </Select>
                </FormControl>
                <Spacer width={25}/>
            </Flex>
        </div>
    )
}