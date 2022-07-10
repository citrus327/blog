import styles from "./index.module.scss";

export const ListItem = (props) => {
  const { children } = props;
  return <div className={styles.listItem}>{children}</div>;
};

export const ListItemContainer = (props) => {
  const { children } = props;
  return <div className={styles.listItemContainer}>{children}</div>;
};
