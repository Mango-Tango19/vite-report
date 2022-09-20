import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = [
	{ label: "The Shawshank Redemption", year: 1994 },
	{ label: "The Godfather", year: 1972 },
	{ label: "The Godfather: Part II", year: 1974 },
	{ label: "The Dark Knight", year: 2008 },
	{ label: "12 Angry Men", year: 1957 },
	{ label: "Schindler's List", year: 1993 },
	{ label: "Pulp Fiction", year: 1994 },
];

function AutocompleteTemp({ endpoint, setSelectData }) {
	//console.log(endpoint);
	const [value, setValue] = React.useState(options[0]);
	const [inputValue, setInputValue] = React.useState("");
	return (
		<Autocomplete
			value={value}
			onChange={(event, newValue) => {
				setSelectData(newValue);
				setValue(newValue);
			}}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			id='controllable-states'
			options={options}
			sx={{ width: 300 }}
			renderInput={(params) => (
				<TextField {...params} label='Выберите сотрудника' />
			)}
		/>
	);
}

export default AutocompleteTemp;
