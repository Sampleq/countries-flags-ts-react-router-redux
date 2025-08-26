import styles from './Button.module.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {} // CMD + click on <button> tag

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={styles.button + ' ' + props.className}>
      {props.children}
    </button>
  );
};
