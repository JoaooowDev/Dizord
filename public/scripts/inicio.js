const data = {
    labels: [
      'Online',
      'Ausente',
      'Ocuapdo',
      'Offline'
    ],
    datasets: [{
      label: 'Member Status',
      data: [50, 50, 50, 50],
      backgroundColor: [
        '#3BA55D',
        '#FAA81A',
        '#ED4245',
        '#747F8D'
      ],
      borderColor: '#14141C',
      hoverOffset: 10
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 15,
                        family: 'Helvetica',

                    }
                }
            }
        }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );