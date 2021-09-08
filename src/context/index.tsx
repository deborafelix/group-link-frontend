import React, { createContext, ReactNode, useContext, useState } from "react";
import { useEffect } from "react";
import { api } from "../config/api";

export type Link = {
    id: string;
    title: string;
    icon: string;
    url: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

type AppContext = {
    originalLinks?: Link[];
    links?: Link[];
    linkFormIsOpen: boolean;
    selectedLink?: Link;
    handleOnLinkFormClick: (id?: string) => void;
    searchFormIsOpen: boolean;
    handleOnSearchFormClick: () => void;
    getLinks: () => Promise<void>;
    filterByIcon: (icon?: string) => void;     
}

type AppProviderProps = {
    children: ReactNode;
}

const Context = createContext<AppContext>({
    originalLinks: [],
    links: [],
    linkFormIsOpen: false,
    handleOnLinkFormClick: (id?: string) => {
      return
    },
    searchFormIsOpen: false,
    handleOnSearchFormClick: () => {
      return
    },
    getLinks: async () => {
      return
    },
    filterByIcon: (icon?: string) => {
      return
    }
})

export const AppProvider: React.FC<AppProviderProps>  = ({
    children,
  }: AppProviderProps) => {
      const [linkFormIsOpen, setLinkFormIsOpen] = useState(false);
      const [searchFormIsOpen, setSearchFormIsOpen] = useState(false);
      const [links, setLinks] = useState<Link[]>([]);
      const [originalLinks, setOriginalLinks] = useState<Link[]>([]);
      const [selectedLink, setSelectedLink] = useState<Link>();

      const getLinks = async () => {
        const response = await api.get('');
        const apiLinks: Link[] = response.data;
        console.log(apiLinks);
        setOriginalLinks(apiLinks);
        setLinks(apiLinks);
      };

      const handleOnLinkFormClick = (id?: string) => {
        if (id) {
          const link = originalLinks.find((link) => link.id === id);
          setSelectedLink(link);
        }
        setLinkFormIsOpen(prev => !prev);
        if (searchFormIsOpen) {
          handleOnSearchFormClick();
        }
      };

      const handleOnSearchFormClick = () => {
        setSearchFormIsOpen(prev => !prev);
        if (linkFormIsOpen) {
          handleOnLinkFormClick();
        }
      };

      const filterByIcon = (icon?: string) => {
        if(!icon) {
          setLinks(originalLinks);
          return
        }
        const filteredLinks = originalLinks.filter((link) => link.icon === icon);
        setLinks(filteredLinks);
      };

      useEffect(() => {
        getLinks();
      }, []);

      return (
          <Context.Provider value={{links, linkFormIsOpen, handleOnLinkFormClick, searchFormIsOpen, handleOnSearchFormClick, getLinks, filterByIcon, originalLinks, selectedLink}}>
            {children}
          </Context.Provider>
      );
  };

  export const useApp = (): AppContext => useContext(Context);