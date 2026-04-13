import { useState } from "react"

function TransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("expense")
  const [category, setCategory] = useState("food")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!amount) return

    const newTransaction = {
      id: Date.now(),
      amount: Number(amount),
      type,
      category,
      date
    }

    addTransaction(newTransaction)

    setAmount("")
    setDate("")
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="number"
        placeholder="Jumlah uang"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="expense">Pengeluaran</option>
        <option value="income">Pemasukan</option>
      </select>

      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="shopping">Shopping</option>
        <option value="other">Other</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Tambah</button>

    </form>
  )
}

export default TransactionForm