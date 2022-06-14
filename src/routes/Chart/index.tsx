import chartData from 'assets/data/chartData'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory'
import styles from './chart.module.scss'

const Chart = () => {
  return (
    <div className={styles.chart}>
      <h1>대한민국 MBTI 분포</h1>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis
          tickValues={chartData.map((el) => el.mbti)}
          style={{ axis: { display: 'none' }, tickLabels: { fontWeight: 300, fontSize: 15, fontFamily: 'Do Hyeon' } }}
        />
        <VictoryBar
          horizontal
          data={chartData}
          x='mbti'
          y='rate'
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: {
              fontFamily: 'Do Hyeon',
              fill: '#e15f41',
              margin: '10px',
            },
            labels: { fontSize: 13, fontFamily: 'Do Hyeon' },
          }}
          barWidth={10}
          labels={({ datum }) => `${datum.rate.toFixed(2)}%`}
        />
      </VictoryChart>
    </div>
  )
}
export default Chart
