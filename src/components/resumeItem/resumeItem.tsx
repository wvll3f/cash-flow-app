import { PropsWithChildren } from 'react';
import * as C from './resumeItemStyle'

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <C.Container>
            <C.Title> { title } </C.Title>
            <C.Info color= { color }> R$ { value } </C.Info>
        </C.Container>
    );
}