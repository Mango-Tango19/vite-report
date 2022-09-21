import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import AutocompleteTemp from "../autocomplete-template/Autocomplite-temp";
import { useForm } from "react-hook-form";
import { ReportSelect, MonthSelect } from "../select-template/SelectMenus";

const HelpTooltip = styled(({ className, ...props }) => (
	<Tooltip
		{...props}
		classes={{ popper: className }}
		title={
			<React.Fragment>
				<Typography color='inherit' variant='p' component='div'>
					<b>{"Табель сотрудника"}</b>
				</Typography>
				{"Рабочее время сотрудника по дням."}
				<Typography color='inherit' variant='p' component='div'>
					<b>{"Табель по проекту"}</b>
				</Typography>
				{
					"Рабочее время сотрудников, которые вносили время на выбранный проект, по дням."
				}
				<Typography color='inherit' variant='p' component='div'>
					<b>{"Табель по отделу"}</b>{" "}
				</Typography>

				{"Рабочее время сотрудников отдела по дням."}
				<Typography color='inherit' variant='p' component='div'>
					<b>{"Ежемесячный отчёт по отделу"}</b>
				</Typography>

				{"Итоговый отчёт по сотрудникам отдела за месяц."}
			</React.Fragment>
		}
	>
		<IconButton>
			<HelpOutlineIcon />
		</IconButton>
	</Tooltip>
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "#f5f5f9",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		border: "1px solid #dadde9",
	},
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const DepartmentCheckbox = () => {
	return (
		<div>
			<Checkbox {...label} />
		</div>
	);
};

// const MonthSelect = ({ month, setMonth }) => {
// 	const handleChange = (e) => {
// 		setMonth(e.target.value);
// 	};
// 	return (
// 		<Box>
// 			<FormControl fullWidth>
// 				<InputLabel id='month-select-label'>Месяц</InputLabel>
// 				<Select
// 					labelId='month-select-label'
// 					id='month-select'
// 					value={month}
// 					label='Месяц'
// 					onChange={handleChange}
// 				>
// 					{monthList.map((item, idx) => {
// 						return (
// 							<MenuItem key={idx} value={item}>
// 								{item}
// 							</MenuItem>
// 						);
// 					})}
// 				</Select>
// 			</FormControl>
// 		</Box>
// 	);
// };

// const ReportSelect = ({ reportName, setReportName }) => {
// 	const handleChange = (e) => {
// 		setReportName(e.target.value);
// 	};
// 	return (
// 		<Box>
// 			<FormControl fullWidth>
// 				<InputLabel id='report-select-label'>Табель</InputLabel>
// 				<Select
// 					labelId='report-select-label'
// 					id='report-select'
// 					value={reportName}
// 					label='Табель'
// 					onChange={handleChange}
// 				>
// 					{reportOptions.map((item, idx) => {
// 						return (
// 							<MenuItem key={idx} value={item}>
// 								{item}
// 							</MenuItem>
// 						);
// 					})}
// 				</Select>
// 			</FormControl>
// 		</Box>
// 	);
// };

const initialValues = {
	reportType: "",
	name: "",
	month: "",
	departmentCheckbox: false,
};

function WorkReports() {
	//const [formValues, setFormValues] = React.useState(initialValues);

	const methods = useForm({ defaultValues: initialValues });

	const { handleSubmit, reset, control, setValue } = methods;

	// const sendData = async (formData) => {
	// 	let post = await fetch("https://jsonplaceholder.typicode.com/posts", {
	// 		method: "POST",
	// 		body: JSON.stringify({
	// 			title: "foo",
	// 			body: "bar",
	// 			userId: 1,
	// 		}),
	// 		headers: {
	// 			"Content-type": "application/json; charset=UTF-8",
	// 		},
	// 	});

	// 	if (!post.ok) {
	// 		throw Error(post.statusText);
	// 	}
	// 	// setOpen(false);
	// 	handleClose();
	// 	console.log("result send to server");

	// 	// .then((response) => response.json())
	// 	// .then((json) => console.log(json));
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	debugger;
	// 	sendData(formValues);
	// 	// formData.append('json1', JSON.stringify(jsonData1));

	// 	// fetch("https://jsonplaceholder.typicode.com/posts", {
	// 	//   method: "POST",
	// 	//   body: formData,
	// 	//   headers: {
	// 	//     "Content-type": "application/json; charset=UTF-8",
	// 	//   },
	// 	// })
	// 	//   .then((response) => response.json())
	// 	//   .then((json) => console.log(json));
	// };

	// const setReportValue = (reportName) => {
	// 	setFormValues((prev) => ({ ...prev, reportName }));
	// };

	// const setMonthValue = (month) => {
	// 	setFormValues((prev) => ({ ...prev, month }));
	// };

	const setNameValue = () => {};

	return (
		<Stack
			spacing={2}
			direction='column'
			justifyContent='center'
			alignItems='center'
		>
			<Typography variant='h5' align='center'>
				Выгрузка отчётов
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant='span'>Выберите табель</Typography>
				<HelpTooltip />
			</Box>
			<form>
				<Box sx={{ width: "50vw" }}>
					<Grid container spacing={2}>
						<Grid item sm={6}>
							<ReportSelect
								name='reportType'
								control={control}
								label='Выберите табель'
								setValue={setValue}
							/>
						</Grid>

						<Grid item sm={6}>
							<MonthSelect
								name='month'
								control={control}
								label='Выберите месяц'
								setValue={setValue}
							/>
						</Grid>
						<Grid item sm={6}>
							{/* {formValues.reportName == "Табель сотрудника" ? (
							<NamesSelector />
						) : null}

						{formValues.reportName == "Табель по проекту" ? (
							<ProjectSelector />
						) : null}

						{formValues.reportName == "Табель по отделу" ? (
							<Box>
								<DepartmentSelector />
								<DepartmentCheckbox />
							</Box>
						) : null}

						{formValues.reportName == "Итоговый отчёт по отделу" ? (
							<Box>
								<DepartmentTotalSelector />
								<DepartmentCheckbox />
							</Box>
						) : null} */}
							<AutocompleteTemp
								endpoint='Names'
								setSelectData={setNameValue}
							/>
						</Grid>
						<Button
							onClick={() => handleSubmit()}
							variant='contained'
						>
							Подготовить
						</Button>
					</Grid>
				</Box>
			</form>
		</Stack>
	);
}

export default WorkReports;
