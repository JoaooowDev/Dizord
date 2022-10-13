// - Meses

const meses = [
  'Janeiro',
  'Feveiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',

]

const data = {
  labels: meses,
  datasets: [{
    label: 'Boosts',
    backgroundColor: '#FF00E5',
    borderColor: '#FF00E5',
    data: [0, 10, 5, 2, 20, 30, 45, 35, 20, 75, 9, 12],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);


// - MemberStatus

const status = [
  'Online',
  'Ausente',
  'Ocupado',
  'Offline'
]
const MemberStatus = {
  labels: status,
  datasets: [{
    label: 'MemberStatus',
    backgroundColor: [
      '#3BA55D',
      '#FAA81A',
      '#ED4245',
      '#747F8D'
    ],
    borderColor: [
      '#3BA55D00',
      '#FAA81A00',
      '#ED424500',
      '#747F8D00'
    ],
    data: [150, 80, 120, 40],
    hoverOffset: 4
  }]
};

const MemberConfig = {
  type: 'doughnut',
  data: MemberStatus,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

const MemberGrafico = new Chart(
  document.getElementById('contadordemembros-grafico'),
  MemberConfig
);

// - Movimentacao do servidor


const MovData = {
  labels: meses,
  datasets: [{
    label: 'Entrou',
    backgroundColor: '#36A2EB',
    borderColor: '#36A2EB',
    data: [100, 75, 80, 20, 39, 64, 295, 299, 100, 86, 78, 57],
  },
  {
    label: 'Saiu',
    backgroundColor: '#E03F42',
    borderColor: '#E03F42',
    data: [15, 120, 52, 22, 220, 230, 245, 5, 27, 50, 100, 30],
  }]
};

const MovConfig = {
  type: 'line',
  data: MovData,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

const MovGrafico = new Chart(
  document.getElementById('movimentacaoservidor-grafico'),
  MovConfig
);