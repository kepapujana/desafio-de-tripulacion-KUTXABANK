import './AnalyticContent.css'; 
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AnalyticContent = () => {
    const data = {
        labels: [
            'Transporte',
            'Alquiler',
            'Servicios',
            'Ropa',
            'Gastos Variados',
            'Entretenimiento',
            'Comidas Fuera',
            'Imprevistos',
            'Vivienda',
        ],
        datasets: [
            {
                label: 'Gastos por Categoría (€)',
                data: [200, 600, 150, 100, 50, 300, 200, 100, 400],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.label}: €${tooltipItem.raw}`;
                    },
                },
            },
        },
    };

    return (
        <div className="analytic-content">
            <h2>Analítica de Gastos por Categoría</h2>
            <Bar data={data} options={options} />
            <h3>Gastos Mensuales Típicos</h3>
            <ul className="expense-list">
                <li>Transporte: 10% del ingreso mensual</li>
                <li>Alquiler: 30% del ingreso mensual</li>
                <li>Servicios: 5% del ingreso mensual</li>
                <li>Ropa: 5% del ingreso mensual</li>
                <li>Gastos Variados: 5% del ingreso mensual</li>
                <li>Comidas Fuera: 10% del ingreso mensual</li>
                <li>Osio: 5% del ingreso mensual</li>
            </ul>
            <h3>Descripción de Gastos de Riesgo</h3>
            <ul className="risk-description-list">
                <li>Transporte: Gastos inesperados, como taxis o transporte público.</li>
                <li>Alquiler: Puede aumentar debido a reparaciones o incrementos de precios.</li>
                <li>Comidas Fuera: Almuerzos frecuentes fuera de casa pueden afectar el presupuesto.</li>
                <li>Vivienda: Reparaciones, servicios públicos y posibles gastos inesperados.</li>
            </ul>
            <div className="alert-box">
                <div className="alert-icon">
                    <span role="img" aria-label="warning">⚠️</span>
                </div>
                <div className="alert-content">
                    <p>¡Atención! Revise sus gastos mensuales y ajuste su presupuesto según sea necesario.</p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticContent;
