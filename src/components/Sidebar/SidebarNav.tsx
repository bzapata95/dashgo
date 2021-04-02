import { Stack } from "@chakra-ui/react";
import { RiContrastLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav () {
  return (
    <Stack spacing="12" align="flex-start">

      <NavSection title="GENERAL" >
        <NavLink icon={RiDashboardLine} href="/dashboard" >
          Dashboard
        </NavLink>
        <NavLink icon={RiContrastLine} href="/users">
          Usuarios
        </NavLink>
      </NavSection>
      
      <NavSection title="AUTOMATIZACIÓN">

        <NavLink icon={RiInputMethodLine}  href="/forms" >
          Formularios
        </NavLink>
        <NavLink icon={RiGitMergeLine}  href="/automation" >
          Automatización
        </NavLink>
      </NavSection>

    </Stack>
  )
}