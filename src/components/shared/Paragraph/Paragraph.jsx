import styles from "./Paragraph.module.css";

const Paragraph = ({ children, style }) => {
  const customStyles = {
    ...style
  };

  return (
    <p className={styles.paragraph} style={customStyles}>
      {children}
    </p>
  );
};

export default Paragraph;
