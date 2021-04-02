import { Box, HStack, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return(
    <Stack direction={["column", "row"]} spacing="4" mt="6" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>10</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem numberPage={1} isCurrentPage />
        <PaginationItem numberPage={2}  />
        <PaginationItem numberPage={3}  />
        <PaginationItem numberPage={4}  />
        <PaginationItem numberPage={5}  />
      </HStack>
    </Stack>
  )
}