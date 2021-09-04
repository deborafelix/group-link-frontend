import React, { createContext, ReactNode, useContext, useState } from "react";
import { useEffect } from "react";
import { AddButton } from "../components/atoms/Buttons/Add/AddButton";
import { SearchForm } from "../components/molecules/SearchForm/SearchForm";
import { api } from "../config/api";

export type Link = {
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
    searchFormIsOpen: boolean;
    handleOnSearchFormClick: () => void;
    getLinks: () => void;    
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
    },
    searchFormIsOpen: false,
    handleOnSearchFormClick: () => {
      return
    },
    getLinks: () => {
      return
    }
})

export const AppProvider: React.FC<AppProviderProps>  = ({
    children,
  }: AppProviderProps) => {
      const [addFormIsOpen, setAddFormIsOpen] = useState(false);
      const [searchFormIsOpen, setSearchFormIsOpen] = useState(false);
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
        if (searchFormIsOpen) {
          handleOnSearchFormClick();
        }
      };

      const handleOnSearchFormClick = () => {
        setSearchFormIsOpen(prev => !prev);
        if (addFormIsOpen) {
          handleOnAddFormClick();
        }
      };

      useEffect(() => {
        getLinks();
      }, []);

      return (
          <Context.Provider value={{links, addFormIsOpen, handleOnAddFormClick, searchFormIsOpen, handleOnSearchFormClick, getLinks}}>
            {children}
          </Context.Provider>
      );
  };

  export const useApp = (): AppContext => useContext(Context);