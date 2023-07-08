import { Box,Button,TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
    firstName:"",
    lastName:"",
email:"",
contact:"",
address1:"",
address2:"",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;  //ReGex is a js thing where you can check based on the string so you will be able to check what the values are

const userSchema = yup.object().shape({   // this schema is going to define the validations (validation logic for each field that we are using)
//we will provide it with pre-made validation functions
firstName:yup.string().required("requird"),
lastName:yup.string().required("requird"),
email:yup.string().email("invalid email").required("required"),
contact:yup
.string()
.matches(phoneRegExp, "Phone Number is Not Valid")
.required("requird"),
address1:yup.string().required("requird"), //"requird" this is the text will pop up if we don't enter the first name 
address2:yup.string().required("requird"), //"requird" this is the text will pop up if we don't enter the first name 

})

function Form() {
    const isNonMobile = useMediaQuery("(min-width:600px)"); //if we hit a min width of 600 px 
    //we are triggering this basic boolean so use media query comes from material ui and allows
    //us to use media queries inside our js or react element itself so we don't have to write it in css

    const handleFormSubmit = (values) =>{
        console.log(values);
    };

  return (
   <Box m= "20px">
<Header title="CREATE USER" subtitle="Create a New User Profile"/>
  <Formik
  onSubmit={handleFormSubmit}
  initialValues={initialValues} //initialValues ganna consist of an obj of the values that we want this form to start with
  validationSchema={userSchema}
  >
{({values,errors,touched,handleBlur,handleChange,handleSubmit}) =>(
    <form onSubmit={handleSubmit}>
<Box 
display="grid" 
gap="30px" 
gridTemplateColumns="repeat(4, minmax(0,1fr))"
sx={{
    "& > div":{gridColumn:isNonMobile ? undefined: "span 4"}
    // so that means when it means span of four it takes up the enire line
}}
> 
{/* gridTemplateColumns allows us to split the grid into 4 sections and each of the section is going to have a minimum of zero so that they can squash to zero but also a maximum of 1fr that means each of the columns can have one fraction of the space  */}
<TextField
fullWidth
variant="filled"
type="text"
label="First Name"
onBlur={handleBlur}
onChange={handleChange}
value={values.firstName}
name="firstName"
error={!!touched.firstName && !!errors.firstName}
helperText={touched.firstName && errors.firstName}
sx={{gridColumn:"span 2"}}
// !! it forced touched to becom a boolean
/>
<TextField
fullWidth
variant="filled"
type="text"
label="Last Name"
onBlur={handleBlur}
onChange={handleChange}
value={values.lastName}
name="lastName"
error={!!touched.lastName && !!errors.lastName}
helperText={touched.lastName && errors.lastName}
sx={{gridColumn:"span 2"}}
/>
<TextField
fullWidth
variant="filled"
type="text"
label="Email"
onBlur={handleBlur}
onChange={handleChange}
value={values.email}
name="email"
error={!!touched.email && !!errors.email}
helperText={touched.email && errors.email}
sx={{gridColumn:"span 4"}}
/>
<TextField
fullWidth
variant="filled"
type="text"
label="Contact Number"
onBlur={handleBlur}
onChange={handleChange}
value={values.contact}
name="contact"
error={!!touched.contact && !!errors.contact}
helperText={touched.contact && errors.contact}
sx={{gridColumn:"span 4"}}
/>
<TextField
fullWidth
variant="filled"
type="text"
label="Adress 1"
onBlur={handleBlur}
onChange={handleChange}
value={values.address1}
name="address1"
error={!!touched.address1 && !!errors.address1}
helperText={touched.address1 && errors.address1}
sx={{gridColumn:"span 4"}}
/>
<TextField
fullWidth
variant="filled"
type="text"
label="Adress 2"
onBlur={handleBlur}
onChange={handleChange}
value={values.address2}
name="address2"
error={!!touched.address2 && !!errors.address2}
helperText={touched.address2 && errors.address2}
sx={{gridColumn:"span 4"}}
/>
</Box>
<Box display="flex" justifyContent="end" am="20px">
<Button type="submit" color="secondary" variant="contained">
    Create New Content
</Button>
</Box>
    </form>
)}   
{/* all the above values come from component and the arrow function allows us to use these values inside our form component*/}
  </Formik>
   </Box>
  )
}

export default Form;



