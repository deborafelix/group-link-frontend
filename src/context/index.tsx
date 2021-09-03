import React, { createContext, ReactNode, useContext, useState } from "react";
import { useEffect } from "react";
import { api } from "../config/api";

type Link = {
    id: string;
    title: string;
    icon: string;
    url: string;
    description: string;
    group: string;
    createdAt: Date;
    updatedAt: Date;
}

type AppContext = {
    links?: Link[];
    addFormIsOpen: boolean;
    handleOnAddFormClick: () => void;
}

type AppProviderProps = {
    children: ReactNode;
}

// TODO: init cards with some universal links (google etc)
const Context = createContext<AppContext>({
    links: [],
    addFormIsOpen: false,
    handleOnAddFormClick: () => {
      return
    }
})

export const AppProvider: React.FC<AppProviderProps>  = ({
    children,
  }: AppProviderProps) => {
      const [addFormIsOpen, setAddFormIsOpen] = useState(false);
      const [links, setLinks] = useState<Link[]>([{
        id: "1234567",
        title: "Google",
        icon: 'FaStar',
        url: 'www.google.com',
        description: 'Site de pesquisa usado para pesquisar coisas',
        group: 'Work',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }]);

      const getLinks = async () => {
        const response = await api.get('');
        const apiLinks: Link[] = response.data;
        console.log(apiLinks);
        setLinks(apiLinks);
      };

      const handleOnAddFormClick = () => {
        setAddFormIsOpen(prev => !prev);
      };

      useEffect(() => {
        getLinks();
      }, []);

      return (
          <Context.Provider value={{links, addFormIsOpen, handleOnAddFormClick}}>
            {children}
          </Context.Provider>
      );
  };

  export const useApp = (): AppContext => useContext(Context);