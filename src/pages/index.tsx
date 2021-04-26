import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("Correo obligatorio").email("Correo invalido"),
  password: yup.string().required("Contraseña obligatoria"),
})

export default function SignIn() {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const  handleSignIn: SubmitHandler<SignInFormData>  = async (values) => {
    console.log({values})
  }
  
  return (
   <Flex w="100vw" h="100vh" align="center" justify="center" >
     <Flex
      as="form"
      width="100%"
      maxWidth="360px"
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      onSubmit={handleSubmit(handleSignIn)}
     >
       <Stack spacing="4">
         
         <Input type="email" name="email" label="Email" {...register("email")} error={errors.email} />
         <Input type="password" name="password" label="Contraseña" {...register("password")} error={errors.password}  />

      </Stack>
       <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={isSubmitting}>Entrar</Button>
     </Flex>
   </Flex>
  )
}
