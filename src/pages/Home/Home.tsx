import React, { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import TransactionForm from '../../components/TransactionForm';
import TransactionList from '../../components/TransactionList';
import { Transaction } from '../../types/Transaction';
import "./Home.css";

const Home: React.FC = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) return null;

  const { transactions, addTransaction, setTransactions, setTransactionToEdit } = transactionContext;

  const handleDeleteTransaction = (id: number) => {
    setTransactions(prevTransactions => prevTransactions.filter(t => t.id !== id));
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setTransactionToEdit(transaction);
  };

  return (
    <div className='inicio'>
      <h1>Home</h1>
      <TransactionForm onSubmit={addTransaction} />
      <TransactionList 
        transactions={transactions} 
        onDelete={handleDeleteTransaction} 
        onEdit={handleEditTransaction} 
      />
      <h3>Este site é um gerenciador de orçamento pessoal, onde ao inserido os valores nos campos adequados, gravará seus gastos, sendo eles entrada e saída</h3>
    </div>
  );
};

export default Home;
