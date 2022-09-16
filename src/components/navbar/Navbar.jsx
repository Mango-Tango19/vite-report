import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { blue } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(blue[500]),
	backgroundColor: blue[500],
	marginRight: 10,
	"&:hover": {
		backgroundColor: blue[800],
	},
}));

function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
					>
						Учёт рабочего времени НИК
					</Typography>
					<Box>
						<ColorButton
							variant='outlined'
							color='primary'
							href='https://portal.avianik.com/bizproc/processes/107/view/0/?list_section_id='
						>
							Внесённые часы
						</ColorButton>

						<ColorButton
							variant='outlined'
							color='primary'
							href='https://portal.avianik.com/bizproc/processes/108/view/0/?list_section_id='
						>
							Автопроставление
						</ColorButton>

						<ColorButton
							variant='outlined'
							color='primary'
							href='https://portal.avianik.com/bizproc/processes/18/view/0/?list_section_id='
						>
							Заявление на отпуск
						</ColorButton>

						<ColorButton
							variant='outlined'
							color='primary'
							href='https://portal.avianik.com/knowledge/it_podderzhka/'
						>
							Помощь
						</ColorButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
