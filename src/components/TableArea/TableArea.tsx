import { Item } from '../../types/Item';
import * as C from './Tablestyle'
import { TableItem } from '../TableItem/TableItem'

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={120}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={140}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>

            <tbody>
                {list.map((item, index) => (
                   <TableItem key={index} item = {item}/>
                ))}
            </tbody>

        </C.Table>
    );
}