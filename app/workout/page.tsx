"use client"

// Import React
import { useEffect, useState } from 'react'

// Import Packages
import axios from 'axios'

// Import Partials
import WorkoutCard from './_partials/WorkoutCard'

// Import Components
import Button from '@/components/Button'

// Import Icons
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai'

// Styles
import styles from './styles.module.css'


export default function Workout() {

  // States
  const [workouts, setWorkouts] = useState<any[]>([])
  const [selectedProgramId, setSelectedProgramId] = useState<number | null>(null)

  // Handlers
  const fetchExercises = async () => {
    const res = await axios.get("https://fakefor.me/api/projects/gymkit/workouts")
    setWorkouts(res.data.data)
    setSelectedProgramId(res.data.data[0].id)
  }

  const handleSelectProgram = (programId: number) => {
    setSelectedProgramId(programId)
  }

  // Effects
  useEffect(() => {
    fetchExercises()
  }, [])

  return (
    <main className={styles.main}>
      <div className={`${styles.mainContainer} container`}>

        <div id={styles.contentWrapper}>
          {workouts?.length > 0 ?
            <>
              <aside id={styles.aside}>
                {/* ACTIONS */}
                <div className={styles.actions}>
                  <Button
                    icon={<AiOutlinePlus />}
                    block={true}
                    label='Yeni Antrenman'
                    status='info'
                  />
                  <Button
                    icon={<AiOutlineEdit />}
                    block={true}
                    label='Antrenman Düzenle'
                    status='secondary'
                  />
                </div>


                <span className={styles.workoutPrograms__title}>Antrenmanlar</span>
                {/* WORKOUT PROGRAMS */}
                <ul className={styles.workoutPrograms}>
                  {workouts?.map((w => (
                    <li key={w.id} onClick={() => handleSelectProgram(w.id)}>
                      <div className={`${styles.workoutProgram} ${w.id === selectedProgramId && styles.workoutProgram__active}`}>{w.name}</div>
                    </li>
                  )))}
                </ul>
              </aside>

              <section id={styles.content}>
                {/* WORKOUT CARDS */}
                {workouts?.find(w => w.id === selectedProgramId)?.exercises?.map((workout: any, index: number) => (
                  <div key={index} className={styles.workoutDay}>
                    <h2>{workout?.day}. Gün</h2>
                    <ul className={styles.workoutCards}>
                      {workout?.exercises?.map((exercise: any, index: number) => {
                        console.log(exercise);
                        return (<li key={index}>
                          <WorkoutCard exercise={exercise} />
                        </li>)
                      }
                      )}
                    </ul>
                  </div>
                ))}
              </section>
            </>
            : <div>Yükleniyor...</div>}
        </div>


      </div>
    </main>
  )
}
