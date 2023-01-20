import styles from './CardCats.module.css'
import photo from '../assets/Photo.svg'
import { useState } from 'react'
import FooterCard from './FooterCard'

const CardCats = (props) => {
  const { name, portions, mouse, weight, additive, description, number } = props
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    number > 0 && setIsChecked((prevState) => !prevState)
  }

  return (
    <div className={styles.card}>
      <div
        className={`${styles['parentCat']} ${isChecked && styles.cardActiv} ${
          !number && styles.cartAbsence
        }`}
        onClick={handleClick}
      >
        <div className={`${styles['cat']}`}>
          <div className={styles.description}>
            {!isChecked ? (
              <span>Сказочное заморское яство</span>
            ) : (
              <span style={{ color: '#D91667' }}>Котэ не одобряет?</span>
            )}
            <p className={styles.name}>{name}</p>
            <p className={styles.additive}>с {additive}</p>
            <p className={styles.portion}>{portions} порций</p>
            <p className={styles.portion}>
              {mouse === '1'
                ? mouse + 'мышь в подарок'
                : mouse <= '4'
                ? mouse + ' мыши в подарок'
                : mouse + ' мышей в подарок'}
            </p>
            <p className={styles.portion}>
              {mouse >= 5 ? 'заказчик доволен' : ''}
            </p>
          </div>
          <img src={photo} alt="Cat" />
          <div className={`${styles['oval']} ${isChecked && styles.cardActiv}`}>
            <span>{weight}</span>
            <p>кг</p>
          </div>
        </div>
      </div>

      {!number ? (
        <div className={styles.footerAbsence}>
          <span>Печалька, с {additive} закончился.</span>
        </div>
      ) : (
        <FooterCard
          isChecked={isChecked}
          description={description}
          handleClick={handleClick}
        />
      )}
    </div>
  )
}

export default CardCats
