import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from 'next/link';
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nombre obligatorio"),
  email: yup.string().required("Correo obligatorio").email("Correo invalido"),
  password: yup.string().required("Contraseña obligatoria").min(6, "Mínimo 6 carácteres"),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], "Las contraseñas tienen que ser iguales"),
})

export default function CreateUser() {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const  handleCreateUser: SubmitHandler<CreateUserFormData>  = async (values) => {
    console.log({values})
  }

  return (
    <Box>

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box 
          as="form" 
          flex="1" 
          borderRadius={8} 
          bg="gray.800" 
          p={["6", "8"]} 
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Crear usuario</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                name="name" 
                label="Nombre completo"  
                {...register("name")} 
                error={errors.name} 
              />
              <Input 
                name="email" 
                type="email" 
                label="Correo electrónico" 
                {...register("email")} 
                error={errors.email} 
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                name="password" 
                type="password" 
                label="Contraseña" 
                {...register("password")} 
                error={errors.password} 
              />
              <Input 
                name="password_confirmation" 
                type="password" 
                label="Confirmación de 
                contraseña" 
                {...register("password_confirmation")} 
                error={errors.password_confirmation} 
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref >
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button 
                type="submit" 
                colorScheme="pink" 
                isLoading={isSubmitting}
              >
                Guardar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}