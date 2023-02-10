import './App.css';
import * as C from './App.style'
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './Data/categories';
import { items } from './Data/items';
import { useEffect, useState } from 'react';
import { getCurrentMonth, filterListByMonth, formateMesAtual } from './helpers/dateFilter'
import { TableArea } from './components/TableArea/TableArea'
import { InfoArea } from './components/InfoArea/InfoArea';
import { InputArea } from './components/InputArea/InputArea'


function App() {
  const [list, setList] = useState(items)
  const [mesAtaul, setMesAtual] = useState(getCurrentMonth());
  const [listFil, setListFil] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0)
  

  useEffect(() => {
    setListFil(filterListByMonth(list, mesAtaul));
  }, [list, mesAtaul]);

  const handleMontheChange = (newMonth: string) => {
    setMesAtual(newMonth)
  }

  useEffect(() => {
    
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in listFil) {

      if (categories[listFil[i].category].expense) {
        expenseCount += listFil[i].value;

      } else {
        incomeCount += listFil[i].value;
      }

      setExpense(expenseCount)
      setIncome(incomeCount)
    }

  }, [listFil])

  const onAddItem = (item: Item) =>{
    let newList = [...list];
    newList.push(item);
    setList(newList)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Controle de Caixa </C.HeaderText>
      </C.Header>

      <C.Body>

        <InfoArea
          currentMonth={mesAtaul}
          onMonthChange={handleMontheChange}
          income={income}
          expense={expense}
        />

        {/* Area de inserções */}
        <InputArea onAdd={onAddItem} />

        <TableArea list={listFil}></TableArea>

      </C.Body>

    </C.Container>
  )
}

export default App
