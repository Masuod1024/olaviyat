import Head from 'next/head'
import TaskPrioritizer from '../src/TaskPrioritizer'

export default function Home() {
  return (
    <>
      <Head>
        <title>اولویت‌یار</title>
      </Head>
      <main>
        <TaskPrioritizer />
      </main>
    </>
  )
}