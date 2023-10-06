import { Box, Grid, Typography } from "@mui/material"
import { Form, Formik, FormikHelpers, useFormik } from 'formik';
import Divider from '@mui/material/Divider';
import ShelfNavbar from "components/ShelfNavbar";
import ShelfTextInput from "components/ShelfTextInput";
import ShelfSpacingSlider from "components/ShelfSpacingSlider";

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
					<ShelfNavbar/>
					<Divider />
					<Grid container padding={3} spacing={3}>
						<Grid item xs={6}>
							<ShelfTextInput name="name" label="Name"/>
						</Grid>
						<Grid item xs={6}>
							<ShelfTextInput name="shelfVariant" label="Shelf variant"/>
						</Grid>
						<Grid item xs={6}>
							<Typography fontSize={10}>SPACING</Typography>
							<ShelfSpacingSlider formik={formik}/>
						</Grid>
					</Grid> 
					<Divider />
					<Box padding={2}>
						<Typography fontSize={14} margin={2}>Manage Rack</Typography>
						<Divider />
					</Box>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</Form>	
	</Formik>
}