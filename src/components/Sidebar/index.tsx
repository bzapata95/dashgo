import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import { RiContrastLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">

        <NavSection title="GENERAL" >
          <NavLink icon={RiDashboardLine} >
            Dashboard
          </NavLink>
          <NavLink icon={RiContrastLine} >
            Usuarios
          </NavLink>
        </NavSection>
        
        <NavSection title="AUTOMATIZACIÓN">

          <NavLink icon={RiInputMethodLine} >
            Formularios
          </NavLink>
          <NavLink icon={RiGitMergeLine} >
            Automatización
          </NavLink>
        </NavSection>

      </Stack>
    </Box>
  )
}