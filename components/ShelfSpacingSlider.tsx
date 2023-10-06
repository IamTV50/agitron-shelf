import { Slider } from "@mui/material"

const spacing_marks = [
	{
	  value: 0,
	  label: '0',
	},{
	  value: 4,
	  label: '4',
	},{
	  value: 8,
	  label: '8',
	},{
	  value: 12,
	  label: '12',
	},{
		value: 16,
		label: '16',
	},{
		value: 20,
		label: '20',
	},{
		value: 24,
		label: '24',
	}
];

export default function ShelfSpacingSlider({ formik }){
	return <Slider 
				marks={spacing_marks}  
				step={4}
				max={24}
				value={formik.values.spacing}
				onChange={(_, newVal) => { formik.setFieldValue('spacing', newVal); }} 
	/>
}