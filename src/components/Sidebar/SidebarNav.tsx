import { Stack } from "@chakra-ui/react";
import { RiContrastLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav () {
  return (
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
  )
}