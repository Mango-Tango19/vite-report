import * as React from "react";
import { Grid, Typography } from "@mui/material";
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

const reportOptions = [
	{ label: "Табель сотрудника", id: 1 },
	{ label: "Табель по проекту", id: 2 },
	{ label: "Табель по отделу", id: 3 },
	{ label: "Итоговый отчёт по отделу", id: 4 },
];

const monthList = [
	"Январь",
	"Февраль",
	"Март",
	"Апрель",
	"Май",
	"Июнь",
	"Июль",
	"Август",
	"Сентябрь",
	"Ноябрь",
	"Декабрь",
];

const names = [];

const MonthSelect = ({ month, setMonth }) => {
	const handleChange = (e) => {
		setMonth(e.target.value);
	};
	return (
		<Box>
			<FormControl fullWidth>
				<InputLabel id='month-select-label'>Месяц</InputLabel>
				<Select
					labelId='month-select-label'
					id='month-select'
					value={month}
					label='Месяц'
					onChange={handleChange}
				>
					{monthList.map((item, idx) => {
						return (
							<MenuItem key={idx} value={item}>
								{item}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
};

const ReportSelect = ({ reportName, setReportName }) => {
	const handleChange = (e) => {
		setReportName(e.target.value);
	};
	return (
		<Box>
			<FormControl fullWidth>
				<InputLabel id='report-select-label'>Табель</InputLabel>
				<Select
					labelId='report-select-label'
					id='report-select'
					value={reportName}
					label='Табель'
					onChange={handleChange}
				>
					<MenuItem value={"Табель сотрудника"}>
						Табель сотрудника
					</MenuItem>
					<MenuItem value={"Табель по проекту"}>
						Табель по проекту
					</MenuItem>
					<MenuItem value={"Табель по отделу"}>
						Табель по отделу
					</MenuItem>
					<MenuItem value={"Итоговый отчёт по отделу"}>
						Итоговый отчёт по отделу
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

const initialValues = {
	reportName: "",
	name: "",
	month: "",
};

function WorkReports() {
	const [formValues, setFormValues] = React.useState(initialValues);

	const sendData = async (formData) => {
		let post = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			body: JSON.stringify({
				title: "foo",
				body: "bar",
				userId: 1,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});

		if (!post.ok) {
			throw Error(post.statusText);
		}
		// setOpen(false);
		handleClose();
		console.log("result send to server");

		// .then((response) => response.json())
		// .then((json) => console.log(json));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		sendData(formData);
		// formData.append('json1', JSON.stringify(jsonData1));

		// fetch("https://jsonplaceholder.typicode.com/posts", {
		//   method: "POST",
		//   body: formData,
		//   headers: {
		//     "Content-type": "application/json; charset=UTF-8",
		//   },
		// })
		//   .then((response) => response.json())
		//   .then((json) => console.log(json));
	};

	const setReportValue = (reportName) => {
		setFormValues((prev) => ({ ...prev, reportName }));
	};

	const setMonthValue = (month) => {
		setFormValues((prev) => ({ ...prev, month }));
	};

	return (
		<Stack spacing={2}>
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
			<Box component='form' onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item sm={6}>
						<ReportSelect
							reportName={formValues.reportName}
							setReportName={setReportValue}
						/>
					</Grid>

					<Grid item sm={6}>
						<MonthSelect
							setMonth={setMonthValue}
							month={formValues.month}
						/>
					</Grid>
					<Grid item sm={6}>
						{formValues.reportName == "Табель сотрудника" ? (
							<NamesSelector />
						) : null}

						{formValues.reportName == "Табель по проекту" ? (
							<ProjectSelector />
						) : null}

						{formValues.reportName == "Табель по отделу" ? (
							<DepartmentSelector />
						) : null}

						{formValues.reportName == "Итоговый отчёт по отделу" ? (
							<DepartmentTotalSelector />
						) : null}
					</Grid>
				</Grid>
			</Box>
		</Stack>
	);
}

export default WorkReports;