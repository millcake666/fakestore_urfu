import {LogoIcon} from "./LogoIcon";
import {
    AppBar,
    Badge,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Toolbar,
    Typography
} from "@mui/material";
import {Flex, Pad, Spacer} from '../primitives'
import {Margin, Padding, ShoppingCart} from '@mui/icons-material';
import React from "react";

const category_list = ["Обувь", "Футболки", "Штаны", "Аксессуары"];


export const Navbar = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('Выберите категорию');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Flex justifyContent={"space-between"} width={'100%'}>
                        <Flex gap={100}>
                            <Flex gap={10} alignContent={'center'} justifyContent={'center'} alignItems={'center'}>
                                <LogoIcon/>
                                <Typography variant="h6" sx={{flexGrow: 1}}>
                                    Your Size Store
                                </Typography>
                            </Flex>

                            <Flex gap={20}>
                                <FormControl variant="outlined">
                                    <InputLabel id="category-label">Категория</InputLabel>
                                    <Select
                                        label="Категория"
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={selectedCategory}
                                        onChange={handleChange}
                                    >
                                        {category_list.map((category) => (
                                            <MenuItem key={category} value={category}>
                                                <Typography variant="subtitle1" component="div">{category}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Flex>
                        </Flex>

                        <Flex>
                            <IconButton color="inherit" aria-label="Корзина">
                                <Badge badgeContent={4} color="error">
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        </Flex>
                    </Flex>
                </Toolbar>
            </AppBar>
        </div>
    )
}