import React, { useEffect, useState } from 'react';
import { notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import '../style/profile/Prolile.css'; 

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [savingsAccounts, setSavingsAccounts] = useState([]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
            // Загрузка данных о накоплениях
            const savedAccounts = JSON.parse(localStorage.getItem('savingsAccounts')) || [];
            setSavingsAccounts(savedAccounts);
        } else {
            notification.error({ message: 'Error', description: 'No se encontró al usuario.' });
        }
    }, []);

    return (
        <div className="user-profile-container">
            {user ? (
                <>
                    <h1>Perfil de Usuario</h1>
                    <h2>¡Bienvenido, {user.email}!</h2>
                    <div className="user-info">
                        <h3>Tus Ahorros</h3>
                        {savingsAccounts.length > 0 ? (
                            savingsAccounts.map((account) => (
                                <div key={account.id} className="savings-item">
                                    <FontAwesomeIcon icon={faPiggyBank} /> 
                                    <h4>{account.goalName} ({account.goalType})</h4>
                                    <p>Cantidad Objetivo: €{account.goalAmount.toFixed(2)}</p>
                                    <p>Ahorros Actuales: €{account.currentAmount.toFixed(2)}</p>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: `${(account.currentAmount / account.goalAmount) * 100}%` }}></div>
                                    </div>
                                    <p>Progreso: {((account.currentAmount / account.goalAmount) * 100).toFixed(2)}%</p>
                                </div>
                            ))
                        ) : (
                            <p>No tienes ahorros todavía. ¡Crea una hucha!</p>
                        )}
                    </div>
                </>
            ) : (
                <p>Cargando perfil...</p>
            )}
        </div>
    );
};

export default UserProfile;
