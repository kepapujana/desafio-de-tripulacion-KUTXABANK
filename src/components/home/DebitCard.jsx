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

  const [savingsHistory, setSavingsHistory] = useState([]);

  useEffect(() => {
    const fakeCardData = {
      cardNumber: '· 3456',
      cardHolder: 'Irati Murua',
      balance: '€54000',
      savingsGoal: '€1000',
      currentSavings: '€54000',
      progress: '80%',
    };
    setCardData(fakeCardData);
  }, []);

  const handleAddSavings = () => {
    if (newSavingAmount && cardData) {
      const newEntry = {
        id: savingsHistory.length + 1,
        amount: `+€${newSavingAmount}`,
        date: new Date().toLocaleString('es-ES'), 
      };

      setSavingsHistory([...savingsHistory, newEntry]);

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
    <>
    <div className="bank-card-info">
            <span>
              <strong>Hola {cardData.cardHolder}</strong>
            </span>
    </div>
    <div className="debit-card">
      <div className="card-header">Perfil Financiero</div>
      <div className="card-body">
        <div className="bank-card">
          <div className="balance-info">
            <span className="balance-amount">{cardData.balance}</span>
          </div>
        </div>

        <div className="savings-info">
          <h3>
              <strong>{cardData.cardNumber}</strong>
          </h3>
          <h4>
            <b>Objetivo de Ahorro</b>  {cardData.savingsGoal}
            <FontAwesomeIcon
              icon={faPencilAlt}
              onClick={handleEditSavings}
              style={{ width: '0.8em', marginLeft: '15px', cursor: 'pointer', color: 'black' }}
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
    </>
  );
};

export default DebitCard;
