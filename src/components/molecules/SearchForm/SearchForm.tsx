import React, { ReactNode } from 'react';
import { LineForm } from '../LineForm/LineForm';
import { Container } from './styles';
import { useTrail, a } from 'react-spring';
import { Link, useApp } from '../../../context';
import { useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { CardHighlighted } from '../CardHighlighted/CardHighlighted';

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

export const SearchForm = () => {
    const {searchFormIsOpen, links} = useApp();
    const [filteredLink, setFilteredLink] = useState<Link>({} as Link);
    const searchLink = (inputText: string) => {
      console.log(inputText)
      if (!inputText || inputText.length === 0) {
        setFilteredLink({} as Link);
        return
      }
      const currentFilteredLink = links?.find((link) => link.title.toLowerCase().includes(inputText.toLowerCase()))
      if (currentFilteredLink) {
        console.log(currentFilteredLink)
        setFilteredLink(currentFilteredLink) 
      } else {
        setFilteredLink({} as Link);
        }
    }

    return(
    <Container>
        <Trail open={searchFormIsOpen}>
            <LineForm text={'Encontre o seu link:'} isBig={false} onChange={searchLink}/>
            {(filteredLink.id) && (
              <CardHighlighted 
              key = {filteredLink.id}
              title={filteredLink.title} 
              description={filteredLink.description || filteredLink.url}
              link={'https://'+filteredLink.url}
              date={formatDate(new Date(filteredLink.createdAt))}
            /> 
            ) 
          }
        </Trail>
    </Container>
    );
}