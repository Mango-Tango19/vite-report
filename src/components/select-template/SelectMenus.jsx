import * as React from "react";
import SelectMenu from "./select-temp";

const reportOptions = [
	{ label: "Табель сотрудника", value: 1 },
	{ label: "Табель по проекту", value: 2 },
	{ label: "Табель по отделу", value: 3 },
	{ label: "Итоговый отчёт по отделу", value: 4 },
];

const monthList = [
	{ label: "Январь", value: 1 },
	{ label: "Февраль", value: 2 },
	{ label: "Март", value: 3 },
	{ label: "Апрель", value: 4 },
	{ label: "Май", value: 5 },
	{ label: "Июнь", value: 6 },
	{ label: "Июль", value: 7 },
	{ label: "Август", value: 8 },
	{ label: "Сентябрь", value: 9 },
	{ label: "Ноябрь", value: 10 },
	{ label: "Декабрь", value: 11 },
];

const ReportSelect = (props) => {
	return <SelectMenu {...props}>{reportOptions}</SelectMenu>;
};

const MonthSelect = (props) => {
	return <SelectMenu {...props}>{monthList}</SelectMenu>;
};

export { ReportSelect, MonthSelect };
