import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link';


interface IWorkoutCard {
    exercise: any
}

export default function WorkoutCard(props: IWorkoutCard) {

    const { exercise } = props
    console.log(exercise);

    return (
        <div className={styles.workoutCard}>
            <h3 className={exercise?.title}>{exercise?.title}</h3>
            <Image src={exercise?.image} alt='workout' width={1920} height={1080} />
            {exercise?.video && <Link href={exercise?.video} target='_blank'>Hareketi izle</Link>}
            <span>{exercise?.repeats}</span>
        </div>
    )
}
