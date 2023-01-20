import styles from './FooterCard.module.css'

const FooterCard = (props) => {
  const { isChecked, description, handleClick } = props

  return (
    <div className={styles.footer}>
      {!isChecked ? (
        <span className={styles.cardFooter}>Чего сидишь? Порадуй котэ,</span>
      ) : (
        <span className={styles.cardFooter}>{description}</span>
      )}
      {!isChecked && (
        <span className={styles.spanFooter} onClick={handleClick}>
          купи
        </span>
      )}
    </div>
  )
}

export default FooterCard
