import styles from './Test.module.css';

interface Props {
  text: string;
}

const Text = ({ text }: Props) => <p className={styles.text}>{text}</p>;

export default Text;
