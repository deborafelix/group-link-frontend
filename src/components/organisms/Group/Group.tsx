import React from 'react';
import { Container } from './styles';
import { useApp } from '../../../context';
import { useState } from 'react';
import { useEffect } from 'react';
import { Icons } from '../../../constants/icon';
import { FiHome } from 'react-icons/fi';

type GroupProps = {
    date: string
}
type IconGroups = {
    group: string
    icon: string
}
export const Group: React.FC = () => {
    const { links, filterByGroup, originalLinks } = useApp();
    const [groups, setGroups] = useState<IconGroups[]>([]);

    useEffect(() => {
        if (!originalLinks) return
        const linksWithIcon = originalLinks.filter((link) => !!link.icon)
        const groupsByLink: IconGroups[] = linksWithIcon?.map(link => ({ group: link.group, icon: link.icon }));
        setGroups(groupsByLink)
    }, [originalLinks]);

    return (
    <Container>
        <FiHome style={{ margin: '10px', fontSize: '30px'}} onClick={() => filterByGroup()} />
        {
            groups.map((group) => {
                const CurrentIcon = Icons[group.icon]
                if (!CurrentIcon) { return false }
                console.log(group.icon)
                return <CurrentIcon key={group.icon} style={{ margin: '10px', fontSize: '30px'}} onClick={() => filterByGroup(group.group)}/>
            })
        }
    </Container>

    );
}