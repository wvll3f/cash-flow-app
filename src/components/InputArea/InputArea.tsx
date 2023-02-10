import * as C from './Inputstyles'
import { Item } from '../../types/Item'
import { ChangeEvent, useEffect, useState } from 'react'
import { categories } from '../../Data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const [dateField, setDateField] = useState('');
    const [tituloField, setTituloField] = useState('');
    const [valueField, setValueField] = useState(0);
    const [categoryField, setCategoryField] = useState('');
    const [typeField, setTypeField] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);

    useEffect(() => {
        console.log(categoryKeys)
    }, []);

    const handleDate = (event: any) => {
        setDateField(event.target.value);
    };
    const handleTitle = (event: any) => {
        setTituloField(event.target.value);
    };
    const handleValue = (event: any) => {
        setValueField(parseInt(event.target.value));
    };
    const handleCategory = (event: any) => {
        setCategoryField(event.target.value);
        console.log(setCategoryField(event.target.value));
    };
    const handleType = (event: any) => {
        setTypeField(event.target.value);
    };

    const addHandleElement = () => {
        let newItem: Item = {
            date: newDateAdjusted(dateField),
            category: categoryField,
            title: tituloField,
            value: valueField,
        }
        onAdd(newItem);
    }

    return (

        <C.Container>
            <C.LabelElement>Data</C.LabelElement>
            <C.InputDate onChange={handleDate} type="date" />

            <C.LabelElement>Titulo</C.LabelElement>
            <C.InputElement onChange={handleTitle} type="text" />

            <C.LabelElement>Valor</C.LabelElement>
            <C.InputElement onChange={handleValue} type="text" />

            <C.LabelElement>Categoria</C.LabelElement>
            <C.SelectElement onChange={handleCategory}>
                <option value={categoryField} hidden>
                    Categoria
                </option>
                {categoryKeys.map((key, index) => (
                    <option key={index} value={key}>{categories[key].title}</option>
                ))}
            </C.SelectElement>

            <C.LabelElement>Tipo</C.LabelElement>
            <C.SelectElement onChange={handleType}>
                <option value="" hidden >
                    Tipo
                </option>
                <option value="1">Entrada</option>
                <option value="2">Saida</option>
            </C.SelectElement>

            <C.ButtonAdd onClick={addHandleElement} >Adicionar</C.ButtonAdd>
        </C.Container>
    )
}