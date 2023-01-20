import styles from './Card.module.css'
import CardCats from './CardCats'

const Card = (props) => {
  const { data } = props

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          <h1>Ты сегодня покормил кота?</h1>
        </div>
        {data.map((el) => (
          <CardCats key={el.id} {...el} />
        ))}
      </div>
    </div>
  )
}

export default Card
