export const chartData = {
  type: 'bar',
  data: {
    labels: [
      'Byggnadsnämnden',
      'Fastighetsnämnden',
      'Förskolenämnden',
      'Grundskolenämnden',
      'Idrotts- och föreningsnämnden',
      'Kommunledningen',
      'Kulturnämnden',
      'Lokalnämnden',
      'Miljö- och klimatnämnde',
      'Nämnden för Arbetsmarknad och vuxen-utbildning',
      'Nämnden för funktionsstöd',
      'Nämnden för Inköp och upphandlin',
      'Nämnden för Intraservice',
      'Nämnden för Konsument- och medborgar-service',
      'Park- och naturnämnden',
      'Socialnämnd Nordost',
      'Socialnämnd Centrum',
      'Socialnämnd Sydväst',
      'Socialnämnd Hisingen',
      'Trafiknämnden',
      'Utbildningsnämnden',
      'Valnämnden',
      'Äldre samt vård- och omsorgsnämnd',
      'Arkivnämnden',
      'Business Region Göteborg AB',
      'Fastighetsnämnden transfereringar',
      'Göteborg & Co AB',
      'Räddningstjänstförbundet Storgötebor',
      'Socialnämnd Centrum studieförbunden',
      'Överförmyndarnämnden arvode'
    ],
    datasets: [
      {
        label: ['Kostnader'],
        data: [
          149510,
          39310,
          4461420,
          8833720,
          519630,
          366560,
          624190,
          -48600,
          101390,
          719370,
          4503150,
          9000,
          20200,
          82610,
          310590,
          1557710,
          1196810,
          676030,
          1108170,
          1059840,
          2200550,
          11630,
          5706510,
          21720,
          30150,
          68000,
          119060,
          364300,
          31200,
          25280
        ],
        backgroundColor: [
          'rgb(200,56,106)',
          'rgb(89,230,140)',
          'rgb(47,87,14)',
          'rgb(109,49,9)',
          'rgb(235,1,24)',
          'rgb(6,191,220)',
          'rgb(192,67,24)',
          'rgb(207,232,17)',
          'rgb(207,180,146)',
          'rgb(253,58,140)',
          'rgb(223,202,208)',
          'rgb(135,100,27)',
          'rgb(132,137,182)',
          'rgb(66,232,156)',
          'rgb(200,112,53)',
          'rgb(158,118,99)',
          'rgb(180,191,12)',
          'rgb(97,87,200)',
          'rgb(240,129,101)',
          'rgb(9,85,27)',
          'rgb(32,7,124)',
          'rgb(56,116,250)',
          'rgb(25,176,27)',
          'rgb(220,160,243)',
          'rgb(84,97,220)',
          'rgb(213,138,103)',
          'rgb(149,110,89)',
          'rgb(253,45,193)',
          'rgb(53,69,225)',
          'rgb(135,111,172)'
        ],
        borderWidth: 1,
        barPercentage: 1,
        grouped: true,
        pointStyle: 'circle'
      }
    ]
  },
  options: {
    responsive: true,

    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
}

export default chartData
