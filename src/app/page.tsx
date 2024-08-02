import styles from "./page.module.css";

interface CustomCSSProperties extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}
export default function Home() {
  return (
    <>
      <div className={styles.header}>League</div>
      <div className={styles.container}>
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} style={{ "--i": index + 1 } as CustomCSSProperties}>
            <img className={styles.img} src={`/images/img-${index + 1}.jpg`} />
          </span>
        ))}
      </div>
    </>
  );
}
