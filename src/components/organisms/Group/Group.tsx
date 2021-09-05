import React from 'react';
import { Container } from './styles';
import { useApp } from '../../../context';
import { useState } from 'react';
import { useEffect } from 'react';
import { Icons } from '../../../constants/icon';
import { FiHome } from 'react-icons/fi';

export const Group: React.FC = () => {
    const { filterByIcon, originalLinks } = useApp();
    const [icons, setIcons] = useState<string[]>([]);

    useEffect(() => {
        if (!originalLinks) return
        const linksWithIcon = originalLinks.filter((link) => !!link.icon)
        const iconsByLink: string[] = linksWithIcon?.map(link => link.icon);
        setIcons(Array.from(new Set(iconsByLink)))
    }, [originalLinks]);

    return (
    <Container>
        <FiHome style={{ margin: '10px', fontSize: '30px'}} onClick={() => filterByIcon()} />
        {
            icons.map((icon) => {
                const CurrentIcon = Icons[icon]
                if (!CurrentIcon) { return false }
                console.log(icon)
                return <CurrentIcon key={icon} style={{ margin: '10px', fontSize: '30px'}} onClick={() => filterByIcon(icon)}/>
            })
        }
    </Container>

    );
}