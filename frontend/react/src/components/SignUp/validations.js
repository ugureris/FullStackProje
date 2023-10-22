import * as yup from 'yup';


const validations= yup.object().shape({
    firstName: yup
        .string()
        .required(),
    lastName:yup
        .string()
        .required(),
    username: yup
        .string()
        .required(),
    password: yup
        .string()
        .min(5,'Parolanız en az 5 karakter olmalıdır')
        .required(),
    passwordRepeat: yup
        .string()
        .oneOf([yup.ref('password')], 'Parolalar uyuşmuyor')
        .required(),
});

export default validations;