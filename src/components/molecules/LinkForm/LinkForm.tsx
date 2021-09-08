import React, { ReactNode, useState } from 'react';
import { AddButton } from '../../atoms/Buttons/Add/AddButton';
import { LineForm } from '../../atoms/LineForm/LineForm';
import { Container } from './styles';
import { useTrail, a } from 'react-spring';
import { IconForm } from '../../atoms/IconForm/IconForm';
import { Link, useApp } from '../../../context';
import { api } from '../../../config/api';

type AnimatedType = {
    open: boolean,
    children: ReactNode,
}

const Trail: React.FC<AnimatedType> = ({ open, children }: AnimatedType) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20 },
  })
  return (
    <div style={{display: 'flex', justifyContent:'flex-start', flexDirection: 'column'}}>
      {trail.map(({...style }, index) => (
        <a.div key={index} style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}


export const LinkForm: React.FC = () => {
    const {linkFormIsOpen, getLinks, selectedLink: link} = useApp();
    const [title, setTitle] = useState(link?.title || '');
    const [url, setUrl] = useState(link?.url || '');
    const [icon, setIcon] = useState(link?.icon || '');
    const [description, setDescription] = useState(link?.description || '');

    const handleOnTitleChange = (inputText: string) => {
      setTitle(inputText)
    }
    const handleOnLinkChange = (inputText: string) => {
      setUrl(inputText)
    }
    const handleOnIconChange = (inputText: string) => {
      setIcon(inputText)
    }
    const handleOnDescriptionChange = (inputText: string) => {
      setDescription(inputText)
    }

    const saveLink = async () => {
      if (link) {
        await api.put('', {
          id: link.id, title, url, icon, description
        })
      } else {
        await api.post('', {title, url, icon, description});
        setTitle('');
        setUrl('');
        setIcon('');
        setDescription('');
      }
      await getLinks();
    }

    return(
    <Container>
        <Trail open={linkFormIsOpen}>
            <LineForm text={'Titulo do link'} isBig={false} onChange={handleOnTitleChange} value={title}/>
            <LineForm text={'Link'} isBig={false} onChange={handleOnLinkChange} value={url}/>
            <IconForm text={'Icone da Categoria'} onChange={handleOnIconChange} value={icon}/>
            <LineForm text={'Descrição'} isBig={true} onChange={handleOnDescriptionChange} value={description}/>
            <AddButton text={'Salvar'} onClick={saveLink} />
        </Trail>
    </Container>
    );
}