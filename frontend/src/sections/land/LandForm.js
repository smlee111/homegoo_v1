import * as Yup from 'yup';
import { useEffect } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, Alert, AlertTitle } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { landResister } from '../../redux/actions/landActions';

// ----------------------------------------------------------------------

export default function LandForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const landRgister = useSelector((state) => state.landRgister);
    const { error: registerError, loading: registerLoading } = landRgister;

    const LandRegisterSchema = Yup.object().shape({
        title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('title required'),
        location: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('location required'),
        address: Yup.string().email('Email must be a valid email address').required('address is required'),
        date: Yup.date(),
        house_type: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('house_type required'),
        heating: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('heating required'),
        size: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('size required'),
        floor: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('floor required'),
        cost: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('cost required'),
        price: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
        price_month: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
        price_year: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
        maintenance_fee: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('maintenance_fee required'),
        loan_repayment: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('loan_repayment required'),
        utility_bill: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('utility_bill required'),
        structure: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('structure required'),
        desc: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
        registrant: userInfo.email,
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            location: '',
            address: '',
            house_type: '',
            heating: '',
            size: '',
            floor: '',
            cost: '',
            price: '',
            price_month: '',
            price_year: '',
            maintenance_fee: '',
            loan_repayment: '',
            utility_bill: '',
            structure: '',
            // image: '',
            desc: '',
        },
        validationSchema: LandRegisterSchema,
        onSubmit: () => {
            dispatch(landResister(values.title, values.location, values.address, values.date, values.house_type, values.heating, values.size, values.floor, values.cost, values.price, values.price_month, values.price_year, values.maintenance_fee, values.loan_repayment, values.utility_bill, values.structure, values.image, values.desc));
        },
    });

    const { errors, touched, values, handleSubmit, isSubmitting, getFieldProps } = formik;
    useEffect(() => {
        if (landRgister) {
            navigate('/land', { replace: true });
        }
    });
    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            fullWidth
                            label="Title"
                            {...getFieldProps('title')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                        />
                        <TextField
                            fullWidth
                            label="Location"
                            {...getFieldProps('location')}
                            error={Boolean(touched.location && errors.location)}
                            helperText={touched.location && errors.location}
                        />
                        <TextField
                            fullWidth
                            label="Address"
                            {...getFieldProps('address')}
                            error={Boolean(touched.address && errors.address)}
                            helperText={touched.address && errors.address}
                        />
                        <TextField
                            fullWidth
                            label="House_type"
                            {...getFieldProps('house_type')}
                            error={Boolean(touched.house_type && errors.house_type)}
                            helperText={touched.house_type && errors.house_type}
                        />
                        <TextField
                            fullWidth
                            label="Heating"
                            {...getFieldProps('heating')}
                            error={Boolean(touched.heating && errors.heating)}
                            helperText={touched.heating && errors.heating}
                        />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            fullWidth
                            label="Size"
                            {...getFieldProps('size')}
                            error={Boolean(touched.size && errors.size)}
                            helperText={touched.size && errors.size}
                        />
                        <TextField
                            fullWidth
                            label="Floor"
                            {...getFieldProps('floor')}
                            error={Boolean(touched.floor && errors.floor)}
                            helperText={touched.floor && errors.floor}
                        />
                        <TextField
                            fullWidth
                            label="Cost"
                            {...getFieldProps('cost')}
                            error={Boolean(touched.cost && errors.cost)}
                            helperText={touched.cost && errors.cost}
                        />
                        <TextField
                            fullWidth
                            label="price"
                            {...getFieldProps('price')}
                            error={Boolean(touched.price && errors.price)}
                            helperText={touched.price && errors.price}
                        />
                        <TextField
                            fullWidth
                            label="price_month"
                            {...getFieldProps('price_month')}
                            error={Boolean(touched.price_month && errors.price_month)}
                            helperText={touched.price_month && errors.price_month}
                        />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            fullWidth
                            label="price_year"
                            {...getFieldProps('price_year')}
                            error={Boolean(touched.price_year && errors.price_year)}
                            helperText={touched.price_year && errors.price_year}
                        />
                        <TextField
                            fullWidth
                            label="maintenance_fee"
                            {...getFieldProps('maintenance_fee')}
                            error={Boolean(touched.maintenance_fee && errors.maintenance_fee)}
                            helperText={touched.pricmaintenance_feee_month && errors.maintenance_fee}
                        />
                        <TextField
                            fullWidth
                            label="loan_repayment"
                            {...getFieldProps('loan_repayment')}
                            error={Boolean(touched.loan_repayment && errors.loan_repayment)}
                            helperText={touched.loan_repayment && errors.loan_repayment}
                        />
                        <TextField
                            fullWidth
                            label="utility_bill"
                            {...getFieldProps('utility_bill')}
                            error={Boolean(touched.utility_bill && errors.utility_bill)}
                            helperText={touched.utility_bill && errors.utility_bill}
                        />
                        <TextField
                            fullWidth
                            label="structure"
                            {...getFieldProps('structure')}
                            error={Boolean(touched.structure && errors.structure)}
                            helperText={touched.structure && errors.structure}
                        />
                        <TextField
                            fullWidth
                            label="desc"
                            {...getFieldProps('desc')}
                            error={Boolean(touched.desc && errors.desc)}
                            helperText={touched.desc && errors.desc}
                        />
                    </Stack>
                    {registerError ? (
                        <Alert severity="error">
                            <AlertTitle>Register Error</AlertTitle>
                            {registerError}
                        </Alert>
                    ) : null}

                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={registerLoading ? isSubmitting : null}
                    >
                        Register
                    </LoadingButton>
                </Stack>
            </Form>
        </FormikProvider>
    );
}
