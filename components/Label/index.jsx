import styles from "./index.module.scss";

export const Label = (props) => {
  const { color, children, onClick, selected } = props;
  const classNames = [styles.label, selected && styles.selected]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classNames}
      style={{ background: `#${color}` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
