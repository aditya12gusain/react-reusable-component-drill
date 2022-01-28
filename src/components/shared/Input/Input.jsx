import styles from "./Input.module.css";

const Input = ({ children, style, label, ...rest }) => {
  const customStyles = {
    ...style
  };

  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <input {...rest} className={styles.input} style={customStyles} />
    </div>
  );
};

export default Input;
