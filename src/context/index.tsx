import React, { createContext, ReactNode, useContext, useState } from "react";
import { useEffect } from "react";
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
    originalLinks?: Link[];
    links?: Link[];
    addFormIsOpen: boolean;
    handleOnAddFormClick: () => void;
    searchFormIsOpen: boolean;
    handleOnSearchFormClick: () => void;
    getLinks: () => void;
    filterByGroup: (group?: string) => void;     
}

type AppProviderProps = {
    children: ReactNode;
}

// TODO: init cards with some universal links (google etc)
const Context = createContext<AppContext>({
    originalLinks: [],
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
    },
    filterByGroup: (group?: string) => {
      return
    }
})

export const AppProvider: React.FC<AppProviderProps>  = ({
    children,
  }: AppProviderProps) => {
      const [addFormIsOpen, setAddFormIsOpen] = useState(false);
      const [searchFormIsOpen, setSearchFormIsOpen] = useState(false);
      const [links, setLinks] = useState<Link[]>([]);
      const [originalLinks, setOriginalLinks] = useState<Link[]>([]);

      const getLinks = async () => {
        const response = await api.get('');
        const apiLinks: Link[] = response.data;
        console.log(apiLinks);
        setOriginalLinks(apiLinks);
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

      const filterByGroup = (group?: string) => {
        if(!group) {
          setLinks(originalLinks);
          return
        }
        const filteredLinks = originalLinks.filter((link) => link.group === group);
        setLinks(filteredLinks);
      };

      useEffect(() => {
        getLinks();
      }, []);

      return (
          <Context.Provider value={{links, addFormIsOpen, handleOnAddFormClick, searchFormIsOpen, handleOnSearchFormClick, getLinks, filterByGroup, originalLinks}}>
            {children}
          </Context.Provider>
      );
  };

  export const useApp = (): AppContext => useContext(Context);