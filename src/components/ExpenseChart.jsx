import { PieChart, Pie, Cell, Tooltip } from "recharts"

function ExpenseChart({ transactions }) {
  const expenseData = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => {
      const existing = acc.find((item) => item.name === curr.category)

      if (existing) {
        existing.value += curr.amount
      } else {
        acc.push({ name: curr.category, value: curr.amount })
      }

      return acc
    }, [])

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"]

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={expenseData}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
        label
      >
        {expenseData.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  )
}

export default ExpenseChart
