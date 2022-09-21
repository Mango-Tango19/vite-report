import MenuItem from "@mui/material/MenuItem";
import { Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function SelectMenu(props) {
	const { name, control, label } = props;

	const generateSelectOptions = (options) => {
		return options.map((option) => {
			return (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			);
		});
	};

	return (
		<FormControl size={"small"} variant={"outlined"} fullWidth>
			<FormLabel component='legend'>{label}</FormLabel>
			<Controller
				control={control}
				name={name}
				label={label}
				render={({ field: { onChange, value } }) => (
					<Select onChange={onChange} value={value}>
						{generateSelectOptions(props.children)}
					</Select>
				)}
			/>
		</FormControl>
	);
}

export default SelectMenu;
