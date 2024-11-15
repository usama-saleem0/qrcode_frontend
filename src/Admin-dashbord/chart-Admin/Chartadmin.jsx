// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import dayjs from 'dayjs';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const LineChart = ({totalAmountHistory  }) => {

//   const now = dayjs();

  
//   const data = {
//     labels: totalAmountHistory.map((_, index) => `Point ${index + 1}`),
//     datasets: [
//       {
//         label: 'Total Amount Over Time',
//         data: totalAmountHistory, 
//         borderColor: 'blue',
//         backgroundColor: 'rgba(0, 0, 255, 0.1)',
//         borderWidth: 2,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: true,
//           borderDash: [5, 5],
//         },
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           display: true,
//           borderDash: [5, 5],
//         },
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };

// export default LineChart;



import React from 'react';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ totalAmountHistory }) => {
  const now = dayjs();

  const data = {
    labels: totalAmountHistory.map((entry) => {
      const timestamp = dayjs(entry.timestamp);
      const hoursDifference = now.diff(timestamp, 'hour');
      
      return hoursDifference < 24
        ? timestamp.format('HH:mm')   // Show time if within 24 hours
        : timestamp.format('MMM D');  // Show date if older than 24 hours
    }),
    datasets: [
      {
        label: 'Total Amount Over Time',
        data: totalAmountHistory.map(entry => entry.amount), // Only the amount values
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 2,
        fill: false,  // Ensures only line without fill
        tension: 0.2, // Curves the line for a smooth effect
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          borderDash: [5, 5],
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          borderDash: [5, 5],
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;


