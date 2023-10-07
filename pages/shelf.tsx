import { Grid, Typography } from "@mui/material"
import { Form, Formik, FormikHelpers, useFormik } from 'formik';
import Divider from '@mui/material/Divider';
import ShelfNavbar from "components/ShelfNavbar";
import ShelfTextInput from "components/ShelfTextInput";
import ShelfSpacingSlider from "components/ShelfSpacingSlider";
import { useState } from "react";
import ItemsShelf from "components/ItemsShelf";

interface Values {
	name: string,
	shelfVariant: string,
	spacing: number,
	zoom_item1: number,
	zoom_item2: number,
	zoom_item3: number,
	zoom_item4: number
};

export default function Shelf(){
	const [selectedItemIndex, setSelectedItemIndex] = useState(null);

	const formik = useFormik<Values>({
		initialValues: {
		  name: '',
		  shelfVariant: '',
		  spacing: 8,
		  zoom_item1: 100,
		  zoom_item2: 100,
		  zoom_item3: 100,
		  zoom_item4: 100
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
					<ItemsShelf selectedItemIndex={selectedItemIndex}
						setSelectedItemIndex={setSelectedItemIndex} 
						formik={formik}/>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</Form>	
	</Formik>
}