import { formatRupiah } from "../utils/formatRupiah"


function TransactionList({ transactions }) {
  
  if (transactions.length === 0) {
  return <p>Belum ada transaksi 😢</p>
}
  
    return (
    <ul>
      {transactions.map((t) => (
        <li 
          key={t.id}
          style={{
            color: t.type === "income" ? "green" : "red"
          }}
        >
          {t.type === "income" ? "💰" : "💸"} {formatRupiah(t.amount)} - {t.category} {t.date && ` - ${t.date}`}
        </li>
      ))}
        



    </ul>
    
  )
}

export default TransactionList