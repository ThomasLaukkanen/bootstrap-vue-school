export const chartData = {
  
  
type: "bar",
  data: {
    labels: ['göteborg','borås'],
    datasets: [{
    label: 'Invånare i Göteborg',
      data: [65, 59],
    base: 0,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
    ],
   
  }]
  },
  options: {
     scales: {
      y: {
        beginAtZero: true
      }
    }
  
  }
};


export default chartData;