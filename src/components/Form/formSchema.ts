import * as yup from "yup";

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*[a-z])/, "Deve conter pelo menos uma letra")
    .matches(/(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(/(?=.*[!@#$%^&*])/, "Deve conter pelo menos um caracter especial")
    .min(6, "Deve conter pelo menos 6 dígitos"),
});

export const formSchemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*[a-z])/, "Deve conter pelo menos uma letra")
    .matches(/(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(/(?=.*[!@#$%^&*])/, "Deve conter pelo menos um caracter especial")
    .min(6, "Deve conter pelo menos 6 dígitos"),
});
