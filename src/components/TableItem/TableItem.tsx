import * as C from './Itemstyles'
import { Item } from '../../types/Item'
import { formatdate } from '../../helpers/dateFilter'
import { categories } from '../../Data/categories'
import { items } from '../../Data/items'

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatdate(item.date)}</C.TableColumn>

            <C.TableColor color={categories[item.category].color}>
                <C.TableColumn>{item.category}</C.TableColumn>
            </C.TableColor>

            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.ValueColor color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.ValueColor>
            </C.TableColumn>

        </C.TableLine>
    );
}