import * as yup from "yup";

export const validationSchema = yup.object().shape({
  body: yup.string().required("Please, enter quote text!"),
  author: yup.string().required("Pleases, enter quote author!"),
  genres: yup
    .array(yup.string())
    .min(1, "Please, select minimum 1 genre of quote!"),
});
