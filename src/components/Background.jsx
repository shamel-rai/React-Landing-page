import styles from './background.module.css';
import videoOne from '../assets/video1.mp4';
import imageOne from '../assets/image1.png';
import imageTwo from '../assets/image2.png';
import imageThree from '../assets/image3.png';
export default function Background({ playStatus, heroCount }) {
    if (playStatus) {
        return (
            <video className={`${styles.background} ${styles.fadeIn}`} autoPlay muted loop>
                <source src={videoOne} type='video/mp4' />
            </video>
        )
    }
    else if (heroCount === 0) {
        return (
            <img src={imageOne} className={`${styles.background} ${styles.fadeIn}`} alt="" />
        )
    }
    else if (heroCount === 1) {
        return (
            <img src={imageTwo} className={`${styles.background} ${styles.fadeIn}`} alt="" />
        )
    }
    else if (heroCount === 2) {
        return (
            <img src={imageThree} className={`${styles.background} ${styles.fadeIn}`} alt="" />
        )
    }
}