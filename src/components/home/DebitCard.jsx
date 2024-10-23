import { useState, useEffect } from 'react';
import '../../style/chart/DebitCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import bankLogo from '../../assets/logo-Kutxabank.svg';
import antImage from '/src/assets/hormiga.png';

const DebitCard = () => {
  const [cardData, setCardData] = useState(null);
  const [newSavingAmount, setNewSavingAmount] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // История пополнений
  const [savingsHistory, setSavingsHistory] = useState([]);

  useEffect(() => {
    // Загрузка данных карты
    const fakeCardData = {
      cardNumber: '1234 5678 9012 3456         ',
      cardHolder: 'Irati Murua Arriaga',
      balance: '€54000',
      savingsGoal: '€1000',
      currentSavings: '€54000',
      progress: '80%',
    };
    setCardData(fakeCardData);
  }, []);

  const handleAddSavings = () => {
    if (newSavingAmount && cardData) {
      // Создаем новую запись в истории пополнений
      const newEntry = {
        id: savingsHistory.length + 1,
        amount: `+€${newSavingAmount}`,
        date: new Date().toLocaleString('es-ES'), // Дата и время на испанском
      };

      // Обновляем историю пополнений
      setSavingsHistory([...savingsHistory, newEntry]);

      // Обновляем текущие накопления без изменения основной карты
      setNewSavingAmount('');
      setIsEditing(false);
    }
  };

  const handleEditSavings = () => {
    setIsEditing(!isEditing);
  };

  if (!cardData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="debit-card">
      <img src={antImage} alt="Hormiga" className="ant" />
      <div className="card-header">Perfil Financiero</div>
      <div className="card-body">
        <div className="bank-card">
          <img src={bankLogo} alt="Logo del banco" className="card-logo" />
          <div className="bank-card-info">
            <span>
              <strong>{cardData.cardNumber}</strong>
            </span>
            <span>
              <strong>{cardData.cardHolder}</strong>
            </span>
          </div>
          <div className="balance-info">
            <span className="balance-amount">{cardData.balance}</span>
          </div>
        </div>

        <div className="savings-info">
          <h4>
            Objetivo de Ahorro: {cardData.savingsGoal}
            <FontAwesomeIcon
              icon={faPencilAlt}
              onClick={handleEditSavings}
              style={{ marginLeft: '10px', cursor: 'pointer', color: 'blue' }}
            />
          </h4>
          <p>Ahorros Actuales: {cardData.currentSavings}</p>
          <p>Progreso: {cardData.progress}</p>
          <div className="savings-progress-bar">
            <div
              className="progress"
              style={{ width: cardData.progress }}
            ></div>
          </div>
        </div>

        {isEditing && (
          <div className="add-savings">
            <input
              type="number"
              placeholder="Monto (€)"
              value={newSavingAmount}
              onChange={(e) => setNewSavingAmount(e.target.value)}
            />
            <button onClick={handleAddSavings}>Añadir</button>
          </div>
        )}
        <div className="savings-history">
          <h4>Historia de Ahorros</h4>
          <ul>
            {savingsHistory.map((entry) => (
              <li key={entry.id}>
                {entry.date}: {entry.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
