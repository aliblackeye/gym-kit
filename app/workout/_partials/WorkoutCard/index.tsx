import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link';


interface IWorkoutCard {
    title: string;
    image: string;
    video: string;
}

export default function WorkoutCard(props: IWorkoutCard) {

    const { title, image, video } = props

    return (
        <div className={styles.workoutCard}>
            <h3 className={styles.title}>{title}</h3>
            <Image src={image} alt='workout' width={1920} height={1080} />
            {video && <Link href={video} target='_blank'>Hareketi izle</Link>}
        </div>
    )
}
