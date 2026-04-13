import { useState, useEffect } from "react"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import { formatRupiah } from "./utils/formatRupiah"

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions")
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState("all") // ← PINDAH KE SINI

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
  }

  const balance = transactions.reduce((acc, t) => {
    return t.type === "income"
      ? acc + t.amount
      : acc - t.amount
  }, 0)

  const filteredTransactions = transactions.filter((t) => {
    if (filter === "all") return true
    return t.type === filter
  })

  return (
    <div style={{ padding: "20px" }}>
      <h1>FinTrack 💸</h1>
      <h2>Saldo: {formatRupiah(balance)}</h2>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Semua</option>
        <option value="income">Pemasukan</option>
        <option value="expense">Pengeluaran</option>
      </select>

      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  )
}

export default App