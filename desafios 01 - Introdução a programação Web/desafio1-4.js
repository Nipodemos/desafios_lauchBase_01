// Operações bancárias

const user = {
  name: "Alan",
  transactions: [],
  balance: 0
}

/// @parameters:
/// type: String,
/// value: int
/// return 1 for sucess and null for failure
function createTransaction(type, value) {
  if (type !== "credit" && type !== "debit") {
    console.error("Type is not valid. Received:", type)
    return
  } else if (value === null) {
    console.error("Value is null")
    return
  }

  if (type === "debit") {
    user.balance -= value
  } else if (type === "credit") {
    user.balance += value
  }

  user.transactions.push({ type, value })
  return 1
}


// Relatórios

function getHigherTransactionByType(type) {
  const filteredTransactions = user.transactions
    .filter(
      (transaction) => transaction.type === type
    )
  const sortedTransactions = filteredTransactions.sort((a, b) => {
    return a.value - b.value
  })
  // console.table(sortedTransactions)
  return sortedTransactions[sortedTransactions.length - 1]
}

function getAverageTransactionValue() {
  let sum = 0
  for (const transaction of user.transactions) {
    sum += transaction.value
  }

  const average = sum / user.transactions.length
  return average
}

function getTransactionsCount() {
  const creditTransactionsAmount = user.transactions.filter((transaction) => transaction.type === "credit")
  const debitTransactionsAmount = user.transactions.filter((transaction) => transaction.type === "debit")

  return {
    credit: creditTransactionsAmount.length,
    debit: debitTransactionsAmount.length
  }
}

//Test

createTransaction("credit", 100)
createTransaction("credit", 10)
createTransaction("credit", 30)
createTransaction("debit", 10)
createTransaction("debit", 300)
createTransaction("debit", 20)


console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));
console.log(getAverageTransactionValue());
console.log(getTransactionsCount());