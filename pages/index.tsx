import { Box, Button } from "@mui/material"
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();

	const handleButtonClick = () => {
		router.push('/new_shelf')
	}

    return <Box>
		<Button variant="contained" color="primary" onClick={handleButtonClick}>Oblikuj svojo polico</Button>
	</Box>
}
