import styles from "./HeadingThree.module.css";

const HeadingThree = ({ children, weight, style }) => {
  const customStyles = {
    fontWeight: weight === "bold" ? "bold" : "normal",
    ...style
  };

  return (
    <>
      <h3 className={styles.heading} style={customStyles}>
        {children}
      </h3>
    </>
  );
};
export default HeadingThree;
