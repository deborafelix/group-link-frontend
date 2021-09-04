import React, { ReactNode, useState } from 'react';
import { AddButton } from '../../atoms/Buttons/Add/AddButton';
import { LineForm } from '../LineForm/LineForm';
import { Container } from './styles';
import { useTrail, a } from 'react-spring';
import { IconForm } from '../IconForm/IconForm';
import { useApp } from '../../../context';
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

export const AddForm = () => {
    const {addFormIsOpen, getLinks} = useApp();
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [group, setGroup] = useState('');
    const [icon, setIcon] = useState('');
    const [description, setDescription] = useState('');

    const handleOnTitleChange = (inputText: string) => {
      setTitle(inputText)
    }
    const handleOnLinkChange = (inputText: string) => {
      setLink(inputText)
    }
    const handleOnGroupChange = (inputText: string) => {
      setGroup(inputText)
    }
    const handleOnIconChange = (inputText: string) => {
      setIcon(inputText)
    }
    const handleOnDescriptionChange = (inputText: string) => {
      setDescription(inputText)
    }

    const saveLink = async () => {
      await api.post('', {title, url: link, group, icon, description});
      await getLinks();
    }

    return(
    <Container>
        <Trail open={addFormIsOpen}>
            <LineForm text={'Titulo do link'} isBig={false} onChange={handleOnTitleChange}/>
            <LineForm text={'Link'} isBig={false} onChange={handleOnLinkChange}/>
            <LineForm text={'Categoria do Link'} isBig={false} onChange={handleOnGroupChange}/>
            <IconForm text={'Icone da Categoria'} onChange={handleOnIconChange}/>
            <LineForm text={'Descrição'} isBig={true} onChange={handleOnDescriptionChange}/>
            <AddButton onClick={saveLink} />
        </Trail>
    </Container>
    );
}