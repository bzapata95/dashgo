import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  numberPage: number;
  isCurrentPage?: boolean;
}

export function PaginationItem ({isCurrentPage = false, numberPage}: PaginationItemProps) {

  if(isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ 
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {numberPage}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="gray.700"
      _hover={{
        bgColor: 'gray.500'
      }}
    >
      {numberPage}
    </Button>
  )
}