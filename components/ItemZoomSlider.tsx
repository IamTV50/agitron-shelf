import { Grid, Slider } from "@mui/material"

const zoom_marks = [
	{
	  value: 0,
	  label: '0',
	},{
	  value: 100,
	  label: '100%',
	},{
	  value: 200,
	  label: '200%',
	}
];

export default function ItemZoomSlider({ formik, valToChange }){
	return <Grid container>
		<Grid item xs={3}></Grid>
		<Grid item xs={6}>
			<Slider 
				marks={zoom_marks}  
				step={100}
				max={200}
				value={formik.values[valToChange]}
				onChange={(_, newVal) => { formik.setFieldValue(valToChange, newVal); }} 
			/>
		</Grid>
		<Grid item xs={3}></Grid>
	</Grid>
}