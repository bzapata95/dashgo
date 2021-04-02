import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, createContext, useContext, useEffect } from 'react';

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

const SidebarDrawerProvider: FC = ({ children }) => {
  const disclosure = useDisclosure()
  const router = useRouter();

  useEffect(() => { 
    disclosure.onClose();
  },[router.asPath]);
  
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

const useSidebarDrawer = () => {
  const context = useContext(SidebarDrawerContext);
  return context;
}

export {SidebarDrawerProvider, useSidebarDrawer}