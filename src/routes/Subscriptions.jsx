import {
  LeftOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Card, Switch } from 'antd';
import '../style/subscriptions/Subscriptions.css';
import React, { useState } from 'react';

const Subscriptions = () => {
  // Array inicial de suscripciones
  const subscriptions = [
    { name: 'Spotify', value: 10, checked: true },
    { name: 'Netflix', value: 15, checked: true },
    { name: 'Amazon Prime', value: 5, checked: true },
    { name: 'Spotify (Otro)', value: 9, checked: true },
  ];

  // Calcular la suma inicial de las suscripciones activadas
  const initialCounter = subscriptions.reduce(
    (total, sub) => (sub.checked ? total + sub.value : total),
    0
  );

  // Estado para el contador
  const [counter2, setCounter2] = useState(initialCounter);

  // Función que maneja el cambio de cada switch
  const handleSwitchChange = (value, checked) => {
    if (checked) {
      setCounter2((prevCounter) => prevCounter + value);
    } else {
      setCounter2((prevCounter) => prevCounter - value);
    }
  };

  return (
    <main className="container-subs">
      <div className="titleContainer">
        <LeftOutlined className="icons" />
        <p className="title">Control de Subscripciones</p>
        <SettingOutlined />
      </div>

      <h1 className="titleBody">Control de Subscripciones</h1>
      <h2 className="subtitleBody">Gestiona y optimiza tus subscripciones</h2>
      <Card className="card">
        <div className="cardContent">
          <p className="cardTitle">Gasto anual estimado</p>
          <p>{counter2 * 12}€</p>
        </div>
      </Card>
      <Card className="card">
        <div className="cardContent">
          <p className="cardTitle">Gasto mensual estimado</p>
          <p>{counter2.toFixed(2)}€</p>
        </div>
      </Card>

      <h1 className="titleBody">Subscripciones anuales</h1>
      {subscriptions.map((sub, index) => (
        <Card key={index} className="card">
          <div className="cardContent">
            <p>
              <InfoCircleOutlined className="iconInfoSubs" />
              {sub.name}
            </p>
            <p>
              <span className="importe">{sub.value}€</span>
              <Switch
                type="checkbox"
                onChange={(checked) => handleSwitchChange(sub.value, checked)}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked={sub.checked}
              />
            </p>
          </div>
        </Card>
      ))}

      <h1 className="titleBody">Simulación de Ahorro Anual</h1>
      <p>
        Selecciona las suscripciones que quieres activar o desactivar para ver
        tu ahorro anual estimado. Esta herramienta te permitirá optimizar tus
        gastos y ahorrar dinero al eliminar suscripciones innecesarias.
      </p>
    </main>
  );
};

export default Subscriptions;
