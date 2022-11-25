import { useState, useEffect, useCallback } from "react";

interface RequestResponse {
	consultation: string[];
	therapy: string[];
}

export const useServicesData = () => {
	const [data, setData] = useState<RequestResponse | undefined>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const getData = useCallback(async () => {
		try {
			const response = await fetch(
				// `https://moshhero.free.beeceptor.com/my/api/options`
				`http://localhost:3000/data.json`
			);
			if (!response.ok) {
				throw new Error(
					`This is an HTTP error: The status is ${response.status}`
				);
			}
			const data = await response.json();
			setData(data);
			setError(null);
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			}
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getData();
	}, [getData]);

	return {
		data,
		loading,
		error,
	};
};
