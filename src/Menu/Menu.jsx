import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faPiggyBank, faHistory, faCog } from '@fortawesome/free-solid-svg-icons';
import AnalyticContent from '../content/AnalyticContent'; 
import SavingsContent from '../content/SavingsContent';
import HistoryContent from '../content/HistoryContent';
import SettingsContent from '../content/SettingsContent';
import './Menu.css'; 
import Hucha from '../Hucha/Hucha';

const SavingsMenu = () => {
    const [activeTab, setActiveTab] = useState('analytics');

    return (
        <div className="menu-container">
            <div className="menu-tabs">
                <div className={`menu-tab ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>
                    <FontAwesomeIcon icon={faChartBar} />
                    <span>Analítica</span>
                </div>
                <div className={`menu-tab ${activeTab === 'savings' ? 'active' : ''}`} onClick={() => setActiveTab('savings')}>
                    <FontAwesomeIcon icon={faPiggyBank} />
                    <span>Huchas</span>
                </div>
                <div className={`menu-tab ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
                    <FontAwesomeIcon icon={faHistory} />
                    <span>Historia</span>
                </div>
                <div className={`menu-tab ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
                    <FontAwesomeIcon icon={faCog} />
                    <span>Ajustes</span>
                </div>
            </div>

            <div className="menu-content">
                {activeTab === 'analytics' && <AnalyticContent />}
                {activeTab === 'savings' && <Hucha />}
                {activeTab === 'savings' && <SavingsContent />}
                {activeTab === 'history' && <HistoryContent />}
                {activeTab === 'settings' && <SettingsContent />}
            </div>
        </div>
    );
};

export default SavingsMenu;

