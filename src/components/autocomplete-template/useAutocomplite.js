//сотрудник, проект, отдел
import { useCallback, useEffect, useReducer, useMemo } from "react";

const usersUrl = "https://rickandmortyapi.com/api/character";
const prjUrl = "https://rickandmortyapi.com/api/location";
const dprtUrl = "https://rickandmortyapi.com/api/episode";

const initialState = {
	isLoading: true,
	isError: false,
	data: [],
	term: "",
	names: [],
};

const reducer = (action, state) => {
	switch (action.type) {
		case "start_request":
			return {
				...state,
				isLoading: true,
			};
		case "request_success":
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};
		case "request_error":
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		case "term_change":
			return {
				...state,
				term: action.payload,
			};

		case "names_success":
			return {
				...state,
				isLoading: false,
				names: action.payload,
			};
	}
};

// const getData = (url, body) => {
// 	return fetch(url, body).then((res) => {
// 		if (!res.ok || res.status !== 200) {
// 			throw new Error(`Request failed with status code ${res.status}`);
// 		}
// 		return res.json();
// 	});
// };

async function getData(url, data = {}) {
	const res = await fetch(url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data),
	});
	if (!res.ok || res.status !== 200) {
		throw new Error(`Request failed with status code ${res.status}`);
	}
	return res.json();
}

const useAutocomplite = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const updateFilter = useCallback(
		(term = "") => dispatch({ type: "term_change", payload: term }),
		[]
	);

	const performRequest = useCallback(() => {
		dispatch({ type: "start_request" });

		getData(usersUrl)
			.then((data) =>
				dispatch({ type: "request_success", payload: data })
			)
			.catch((err) => {
				console.error(err);
				dispatch({ type: "request_error" });
			});
	}, [state.term]);

	useEffect(() => {
		performRequest();
	}, [performRequest]);

	const getNames = useMemo(() => {
		dispatch({ type: "start_request" });

		getData(usersUrl, "")
			.then((data) => dispatch({ type: "names_success", payload: data }))
			.catch((err) => {
				console.error(err);
				dispatch({ type: "request_error" });
			});
	}, []);

	useEffect(() => {
		getNames;
	}, [getNames]);

	return {
		...state,
		getNames,
		updateFilter,
	};
};
