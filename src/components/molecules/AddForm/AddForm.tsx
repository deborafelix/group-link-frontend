import React, { ReactNode, useState } from 'react';
import { AddButton } from '../../atoms/Buttons/Add/AddButton';
import { LineForm } from '../LineForm/LineForm';
import { Container } from './styles';
import { useTrail, a } from 'react-spring';
import { FaStar } from 'react-icons/fa';
import { IconForm } from '../IconForm/IconForm';
import { useApp } from '../../../context';

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
    const {addFormIsOpen} = useApp();
    return(
    <Container>
        <Trail open={addFormIsOpen}>
            <LineForm text={'Titulo do link'} isBig={false}/>
            <LineForm text={'Link'} isBig={false}/>
            <LineForm text={'Categoria do Link'} isBig={false}/>
            <IconForm text={'Icone da Categoria'}/>
            <LineForm text={'Descrição'} isBig={true}/>
            <AddButton />
        </Trail>
    </Container>
    );
}