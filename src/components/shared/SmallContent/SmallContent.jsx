import styles from "./SmallContent.module.css";

const SmallContent = ({ children, type, weight, style }) => {
  const customStyles = {
    fontWeight: weight === "bold" ? "bold" : "normal",
    ...style
  };

  return type === "para" ? (
    <p className={styles.smallContent} style={customStyles}>
      {children}
    </p>
  ) : (
    <span className={styles.smallContent} style={customStyles}>
      {children}
    </span>
  );
};

export default SmallContent;
