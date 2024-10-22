import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faShoppingCart, faCreditCard, faReceipt } from '@fortawesome/free-solid-svg-icons';
import './HistoryContent.css'; // Подключите стили для таблицы

const transactions = [
  {
    id: 1,
    date: '2023-10-01',
    description: 'Salario - Transferencia',
    withdrawal: 0,
    deposit: 2000,
    balance: 2000,
  },
  {
    id: 2,
    date: '2023-10-02',
    description: 'Compra - Супермаркет',
    withdrawal: 150,
    deposit: 0,
    balance: 1850,
  },
  {
    id: 3,
    date: '2023-10-05',
    description: 'Pago de servicios - Electricidad',
    withdrawal: 75,
    deposit: 0,
    balance: 1775,
  },
  {
    id: 4,
    date: '2023-10-07',
    description: 'Transferencia - Ahorros',
    withdrawal: 500,
    deposit: 0,
    balance: 1275,
  },
  {
    id: 5,
    date: '2023-10-10',
    description: 'Compra - Restaurante',
    withdrawal: 100,
    deposit: 0,
    balance: 1175,
  },
  {
    id: 6,
    date: '2023-10-12',
    description: 'Reembolso - Супермаркет',
    withdrawal: 0,
    deposit: 30,
    balance: 1205,
  },
  {
    id: 7,
    date: '2023-10-15',
    description: 'Pago de tarjeta de crédito',
    withdrawal: 300,
    deposit: 0,
    balance: 905,
  },
  {
    id: 8,
    date: '2023-10-20',
    description: 'Donación - Organización',
    withdrawal: 50,
    deposit: 0,
    balance: 855,
  },
];

const HistoryContent = () => {
  return (
    <div>
      <h2>Historial de Transacciones</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Retiro</th>
            <th>Depósito</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>
                <FontAwesomeIcon 
                  icon={
                    transaction.withdrawal ? faShoppingCart : 
                    transaction.deposit ? faMoneyBillWave : 
                    faReceipt
                  } 
                /> {transaction.description}
              </td>
              <td className="withdrawal">{transaction.withdrawal.toFixed(2)} €</td>
              <td className="deposit">{transaction.deposit.toFixed(2)} €</td>
              <td>{transaction.balance.toFixed(2)} €</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Мотивационный факт */}
      <div className="motivation-fact">
        <h3>¡Motivación para Ahorrar!</h3>
        <p>
          "Ahorra hoy para disfrutar de un mejor mañana. 
          Cada euro que ahorras es un paso más cerca de tus sueños."
        </p>
      </div>
    </div>
  );
};

export default HistoryContent;
