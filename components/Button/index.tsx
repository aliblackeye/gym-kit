
import styles from './styles.module.css'

// Import Constants
import { STATUS } from '@/common/constants/status';
import { SIZES } from '@/common/constants/sizes';

interface IButton {
  label?: string;
  onClick?: () => void;
  status: STATUS;
  size?: SIZES;
  className?: string;
  icon?: JSX.Element;
  block?: boolean;
}

export default function Button(props: IButton) {

  const { status, label, onClick, size = "md", className, icon, block } = props;

  if (!icon && !label) throw new Error('Button component must have a label prop if it does not have an icon prop');

  return (
    <button className={`${className} ${styles.button} ${status && styles[status]} ${size && `${styles[size]} ${block && `${styles.block}`}`}`} onClick={onClick}>
      {icon && <div className={styles.icon}>{icon}</div>} {label && <span className={styles.label}>{label}</span>}
    </button>
  )
}
