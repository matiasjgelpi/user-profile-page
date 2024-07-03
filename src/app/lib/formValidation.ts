"use server";

import { z } from "zod";

const schema = z
  .object({
    mail: z
      .string({
        invalid_type_error: "Email inválido",
        required_error: "Email es requerido",
      })
      .email({
        message: "Email inválido",
      }),
    name: z
      .string({
        invalid_type_error: "Nombre inválido",
        required_error: "Nombre es requerido",
      })
      .min(3, "Un nombre válido es requerido (mínimo 3 caracteres)"),
    message: z
      .string({
        required_error: "Un mensaje es requerido",
      })
      .min(10, "Un mensaje válido es requerido (mínimo 10 caracteres)"),
  })
  .required();

export async function sendMessage(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    mail: formData.get("mail"),
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    return {
      message: errors?.message ? errors.message[0] : "",
      name: errors?.name ? errors.name[0] : "",
      mail: errors?.mail ? errors.mail[0] : "",
    };
  }

  return {
    message: "",
    name: "",
    mail: "",
  };
}
