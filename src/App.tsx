import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BaseChartDataChildrenInterface } from './components/DonutChartInterface';
import DonutChart from './components/DonutChart';

function App() {

  const [data, setData] = useState<BaseChartDataChildrenInterface[]>([]);
  const fruitList = [] as unknown as BaseChartDataChildrenInterface[]

  const chargeChart = (): void => {
    fruitList.push({ key: `Orange`, value: '10' } as BaseChartDataChildrenInterface);
    fruitList.push({ key: `Blackberry`, value: '50' } as BaseChartDataChildrenInterface);
    fruitList.push({ key: `Blueberry`, value: '5' } as BaseChartDataChildrenInterface);
    fruitList.push({ key: `Whatermelon`, value: '8' } as BaseChartDataChildrenInterface);
    setData([...fruitList]);
  };

  useEffect(() => {
    if (fruitList) {
      chargeChart();
    }
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://d3js.org/" target="_blank">
          <img src="https://d3js.org/logo.svg" className="logo d3" alt="D3 logo" />
        </a>
      </div>
      <h1>Vite + React + D3</h1>
      <div className="card">
        <>
          {data && (
            <DonutChart
              data={data}
              height={200}
              width={200}
              text={`Fruits`}
            />
          )}
        </>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </div>
  )
}

export default App
