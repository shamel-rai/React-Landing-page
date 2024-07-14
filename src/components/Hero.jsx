import styles from './hero.module.css';
import arrowBtn from '../assets/arrow_btn.png';
import playBtn from '../assets/play_icon.png';
import pauseBtn from '../assets/pause_icon.png';
export default function Hero({ setPlayStatus, heroCount, playStatus, setHeroCount, heroData }) {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <p>{heroData.textOne}</p>
                <p>{heroData.textTwo}</p>

            </div>
            <div className={styles.heroExplore}>
                <p>Explore the features</p>
                <img src={arrowBtn} alt="" />
            </div>
            <div className={styles.playBtn}>
                <ul className={styles.heroDots}>
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? styles.heroDotOrange : styles.heroDot}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? styles.heroDotOrange : styles.heroDot}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? styles.heroDotOrange : styles.heroDot}></li>

                </ul>
                <div className={styles.heroPlay}>
                    <img src={playStatus ? pauseBtn : playBtn}
                        onClick={() => setPlayStatus(!playStatus)} alt="" />
                    <p>Play</p>
                </div>
            </div>
        </div>
    )
}