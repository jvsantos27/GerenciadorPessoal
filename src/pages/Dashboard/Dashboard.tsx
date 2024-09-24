import React, { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import Resumo from '../../components/Resumo';
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) return null;

  const { transactions } = transactionContext;

  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <Resumo transactions={transactions} />
    </div>
  );
};

export default Dashboard;
