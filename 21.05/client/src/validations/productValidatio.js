import * as yup from "yup"

const productSchema = yup.object().shape({
    img: yup.string().required(),
    title: yup.string().required(),
    price:yup.string().required(),
    bio:yup.string().required()
});
export default productSchema;