import { useState, useEffect } from 'react';
import './Hucha.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPiggyBank, faGift, faUmbrellaBeach, faHome } from '@fortawesome/free-solid-svg-icons';
import SavingsMenu from '../Menu/Menu';
const Hucha = () => {
  const [savingsAccounts, setSavingsAccounts] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newGoalName, setNewGoalName] = useState('');
  const [newGoalAmount, setNewGoalAmount] = useState('');
  const [newCurrentAmount, setNewCurrentAmount] = useState('');
  const [newGoalType, setNewGoalType] = useState('General');
  const [incomePercentage, setIncomePercentage] = useState('');
  const [fixedAmount, setFixedAmount] = useState('');
  const [roundingOption, setRoundingOption] = useState(false);
  const [tips, setTips] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(faPiggyBank);
  const [amountToAdd, setAmountToAdd] = useState('');
  const [showAddFundsForm, setShowAddFundsForm] = useState(false);

  const goalTypes = ['General', 'Vacaciones', 'Fondo de Emergencia', 'Compra Grande'];
  const icons = [faPiggyBank, faGift, faUmbrellaBeach, faHome];

  useEffect(() => {
    const savedAccounts = JSON.parse(localStorage.getItem('savingsAccounts')) || [];
    setSavingsAccounts(savedAccounts);
  }, []);

  useEffect(() => {
    localStorage.setItem('savingsAccounts', JSON.stringify(savingsAccounts));
  }, [savingsAccounts]);

  const addSavingsGoal = () => {
    if (newGoalName && newGoalAmount) {
      let savingsPlan = {};

      if (incomePercentage) {
        savingsPlan.type = 'Porcentaje de Ingresos';
        savingsPlan.value = incomePercentage;
      } else if (fixedAmount) {
        savingsPlan.type = 'Monto Fijo';
        savingsPlan.value = fixedAmount;
      }

      const newAccount = {
        id: Date.now(),
        goalName: newGoalName,
        goalAmount: parseFloat(newGoalAmount),
        currentAmount: parseFloat(newCurrentAmount) || 0,
        goalType: newGoalType,
        savingsPlan,
        roundingOption,
        icon: selectedIcon,
      };
      setSavingsAccounts([...savingsAccounts, newAccount]);
      setNewGoalName('');
      setNewGoalAmount('');
      setNewCurrentAmount('');
      setNewGoalType('General');
      setIncomePercentage('');
      setFixedAmount('');
      setRoundingOption(false);
      setSelectedIcon(faPiggyBank);
      setShowCreateForm(false);
      generateSavingTips();
    }
  };

  const deleteSavingsGoal = (id) => {
    const updatedAccounts = savingsAccounts.filter(account => account.id !== id);
    setSavingsAccounts(updatedAccounts);
  };

  const updateSavingsGoal = (id, amount) => {
    const updatedAccounts = savingsAccounts.map(account => {
      if (account.id === id) {
        const newCurrentAmount = account.currentAmount + parseFloat(amount);
        const updatedAccount = { ...account, currentAmount: newCurrentAmount };

        if (newCurrentAmount >= account.goalAmount) {
          setShowConfetti(true);
          alert('¡Felicidades! Has alcanzado tu objetivo de ahorro con éxito 🎉');
          setTimeout(() => {
            setShowConfetti(false);
          }, 5000);
        }
        return updatedAccount;
      }
      return account;
    });
    setSavingsAccounts(updatedAccounts);
  };

  const handleRoundingOption = (event) => {
    setRoundingOption(event.target.checked);
  };

  const openCreateForm = () => {
    setShowCreateForm(true);
  };

  const generateSavingTips = () => {
    const newTips = [
      { id: 1, text: "Reduce tus gastos en café, intenta prepararlo en casa", completed: false },
      { id: 2, text: "Desactiva las suscripciones que no uses", completed: false },
      { id: 3, text: "Compra ropa solo en ofertas", completed: false },
      { id: 4, text: "Busca entretenimiento gratuito para reducir gastos", completed: false },
      { id: 5, text: "Usa bicicleta o camina para ahorrar en transporte", completed: false },
    ];
    setTips(newTips);
  };

  const toggleTipCompleted = (id) => {
    setTips(tips.map(tip => tip.id === id ? { ...tip, completed: !tip.completed } : tip));
  };

  const handleAddFunds = (id) => {
    updateSavingsGoal(id, amountToAdd);
    setAmountToAdd(''); // Сбросить значение поля
    setShowAddFundsForm(false); // Скрыть форму пополнения
  };

  return (
    <div className="hucha-container">
      <h2>Mis Ahorros y Gastos</h2>

      {showConfetti && (
        <div className="confetti-animation">
          {/* Можете вставить конфетти-анимацию сюда */}
        </div>
      )}
      <button onClick={openCreateForm}>Crear Hucha</button>

      {showCreateForm && (
        <div className="create-savings-form">
          <h3>Crear Hucha</h3>
          <input
            type="text"
            placeholder="Nombre de la Hucha"
            value={newGoalName}
            onChange={(e) => setNewGoalName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Cantidad Objetivo (€)"
            value={newGoalAmount}
            onChange={(e) => setNewGoalAmount(e.target.value)}
          />
          <input
            type="number"
            placeholder="Ahorros Actuales (€)"
            value={newCurrentAmount}
            onChange={(e) => setNewCurrentAmount(e.target.value)}
          />

          <h4>Tipo de Hucha</h4>
          <select value={newGoalType} onChange={(e) => setNewGoalType(e.target.value)}>
            {goalTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <h4>Seleccionar Ícono</h4>
          <div className="icon-selection">
            {icons.map((icon, index) => (
              <FontAwesomeIcon
                key={index}
                icon={icon}
                onClick={() => setSelectedIcon(icon)}
                className={`icon-option ${icon === selectedIcon ? 'selected' : ''}`}
              />
            ))}
          </div>

          <h4>Modo de Ahorro</h4>
          <div>
            <label>Porcentaje de Ingresos: </label>
            <input
              type="number"
              placeholder="% de ingresos"
              value={incomePercentage}
              onChange={(e) => setIncomePercentage(e.target.value)}
            />
          </div>
          <div>
            <label>Monto Fijo: </label>
            <input
              type="number"
              placeholder="Monto Fijo (€)"
              value={fixedAmount}
              onChange={(e) => setFixedAmount(e.target.value)}
            />
          </div>

          <h4>Opciones Adicionales</h4>
          <div>
            <label>
              <input
                type="checkbox"
                checked={roundingOption}
                onChange={handleRoundingOption}
              />
              Redondear saldo al euro más cercano
            </label>
          </div>

          <button onClick={addSavingsGoal}>Añadir Hucha</button>
        </div>
      )}

      <div className="savings-list">
        <h3>Tus Huchas</h3>
        {savingsAccounts.length === 0 ? (
          <p>No hay huchas creadas. ¡Añade una!</p>
        ) : (
          savingsAccounts.map((account) => (
            <div key={account.id} className="savings-item">
              <h4>
                <FontAwesomeIcon icon={account.icon} /> {account.goalName} ({account.goalType})
              </h4>
              <p>Cantidad Objetivo: €{account.goalAmount.toFixed(2)}</p>
              <p>Ahorros Actuales: €{account.currentAmount.toFixed(2)}</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${(account.currentAmount / account.goalAmount) * 100}%` }}></div>
              </div>
              <p>Progreso: {((account.currentAmount / account.goalAmount) * 100).toFixed(2)}%</p>
              <p>Tipo de Ahorro: {account.savingsPlan.type}</p>
              <p>Valor: {account.savingsPlan.value}{account.savingsPlan.type === 'Porcentaje de Ingresos' ? '%' : '€'}</p>
              {account.roundingOption && <p>Redondeo Activado</p>}

              <button className="delete-button" onClick={() => deleteSavingsGoal(account.id)}>
                <FontAwesomeIcon icon={faTrashAlt} /> Eliminar
              </button>

              <div className="add-savings">
                <input
                  type="number"
                  placeholder="Añadir Monto (€)"
                  value={amountToAdd}
                  onChange={(e) => setAmountToAdd(e.target.value)}
                />
                <button onClick={() => handleAddFunds(account.id)}>Añadir</button>
              </div>
            </div>
          ))
        )}
      </div>

      {tips.length > 0 && (
        <div className="saving-tips">
          <h3>Consejos para Ahorrar Más</h3>
          <ul className="tips-list">
            {tips.map((tip) => (
              <li key={tip.id} className={`tip ${tip.completed ? 'completed-tip' : ''}`}>
                <label className="tip-label">
                  <input
                    type="checkbox"
                    checked={tip.completed}
                    onChange={() => toggleTipCompleted(tip.id)}
                  />
                  <span>{tip.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hucha;
