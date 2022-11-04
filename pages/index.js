import Layout from '../components/Layout/Layout'
import s from '../styles/Home.module.css'
import Card from '../components/Cards/Card'

export default function Home() {

  return (
    <Layout>
      <section className={s.main_container}>
        <Card />
      </section>
    </Layout>
  )
}
