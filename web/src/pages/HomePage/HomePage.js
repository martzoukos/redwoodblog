import { MetaTags } from '@redwoodjs/web'
import Articlescell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Articlescell />
    </>
  )
}

export default HomePage
