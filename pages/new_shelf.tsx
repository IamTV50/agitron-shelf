import { Button, Grid, Slider, TextField, Typography } from "@mui/material"
import { Field, Form, Formik, FormikHelpers, useFormik, useFormikContext } from 'formik';
import Divider from '@mui/material/Divider';

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

interface Values {
	name: string,
	shelfVariant: string,
	spacing: number
};

export default function NewShelf(){
	const formik = useFormik<Values>({
		initialValues: {
		  name: '',
		  shelfVariant: '',
		  spacing: 8
		},
		onSubmit: (values, { setSubmitting }) => {}
	});

	return <Formik
		enableReinitialize
		initialValues={formik.values}
		onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
			setTimeout(() => {
			  alert(JSON.stringify(values, null, 2));
			  setSubmitting(false);
			}, 500);
		  }}>
		<Form>
			<Grid container>
				<Grid item xs></Grid>
				<Grid item xs={8}>
					<Grid container spacing={1} margin={3}>
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
					<Divider />
					<Grid container padding={3} spacing={3}>
						<Grid item xs={6}>
							<Field name="name">
								{({ field }) => (
									<TextField variant="outlined"
										fullWidth
										label="Name"
										{...field} />
								)}
							</Field>
						</Grid>
						<Grid item xs={6}>
							<Field name="shelfVariant">
								{({ field }) => (
									<TextField variant="outlined"
										fullWidth
										label="Shelf variant"
										{...field}/>
								)}
							</Field>
						</Grid>
						<Grid item xs={6}>
							<Typography fontSize={10}>SPACING</Typography>
							<Slider 
								marks={spacing_marks}  
								step={4}
								max={24}
								value={formik.values.spacing}
								onChange={(_, newVal) => { formik.setFieldValue('spacing', newVal); }}/>
						</Grid>
					</Grid> 
					<Divider />
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</Form>	
	</Formik>
}