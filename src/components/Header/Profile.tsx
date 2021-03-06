import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bryan Zapata</Text>
          <Text color="gray.300" fontSize="small">bmzc95@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Bryan Zapata" src="https://github.com/bzapata95.png" />
    </Flex>
  )
}