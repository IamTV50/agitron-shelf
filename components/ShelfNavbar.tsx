import { Button, Grid, Typography } from "@mui/material"

export default function ShelfNavbar(){
	return <Grid container spacing={1} margin={3}>
		<Grid item xs={7.5}>
			<Typography variant="body1" style={{fontSize: '1.7em', fontWeight: 'normal'}}>Shelf</Typography>
		</Grid>
		<Grid item xs={2}>
			<Button variant="contained" size="large" color="error" fullWidth>Delete</Button>
		</Grid>
		<Grid item xs={2}>
			<Button variant="contained" size="large" fullWidth type="submit">Save now</Button>
		</Grid>
	</Grid>
}
