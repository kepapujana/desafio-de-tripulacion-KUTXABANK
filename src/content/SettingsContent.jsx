import '../style/chart/SettingsContent.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faTabletAlt, faDesktop } from '@fortawesome/free-solid-svg-icons';

const SettingsContent = () => {
    const [language, setLanguage] = useState('es'); // Язык по умолчанию
    const [notificationsEnabled, setNotificationsEnabled] = useState(true); // Уведомления по умолчанию включены
    const [profileVisibility, setProfileVisibility] = useState(true); // Профиль по умолчанию публичный

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleNotificationsToggle = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    const handleProfileVisibilityToggle = () => {
        setProfileVisibility(!profileVisibility);
    };

    return (
        <div>
            <h2>Ajustes</h2>
            <p>Aquí podrás ajustar tus configuraciones.</p>

            <div className="settings-item">
                <label htmlFor="language">Idioma:</label>
                <select id="language" value={language} onChange={handleLanguageChange}>
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                </select>
            </div>

            <div className="settings-item">
                <label htmlFor="notifications">Notificaciones:</label>
                <input 
                    type="checkbox" 
                    id="notifications" 
                    checked={notificationsEnabled} 
                    onChange={handleNotificationsToggle} 
                />
                <span>{notificationsEnabled ? 'Activadas' : 'Desactivadas'}</span>
            </div>

            <div className="settings-item">
                <label htmlFor="profile-visibility">Visibilidad del Perfil:</label>
                <input 
                    type="checkbox" 
                    id="profile-visibility" 
                    checked={profileVisibility} 
                    onChange={handleProfileVisibilityToggle} 
                />
                <span>{profileVisibility ? 'Público' : 'Privado'}</span>
            </div>

            <h3>Historial de Autorización</h3>
            <ul className="authorization-history">
                <li>
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <span>Juan se autorizó con un móvil - 2024-10-20</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faTabletAlt} />
                    <span>Juan se autorizó con una tablet - 2024-10-18</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faDesktop} />
                    <span>Juan se autorizó con un escritorio - 2024-10-15</span>
                </li>
            </ul>

            <button className="save-settings">Guardar Cambios</button>
        </div>
    );
};

export default SettingsContent;
