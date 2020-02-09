import { Fragment } from 'react'
import ajax from 'plugins/ajax'
import Header from '../components/header'
import Article from '../components/article'

import mainStyle from './index.scss'

const Main = ({ articles }) => {
    return (
        <Fragment>
            <Header />
            <div className={[
                mainStyle.main
            ].join(' ')}>
                {
                    articles.map(item => {
                        return <Article key={item._id} data={item} />
                    })
                }
            </div>
        </Fragment>
    )
}

Main.getInitialProps = async () => {
    const { data } = await ajax.get('/article')
    return {
        articles: data || []
    }
}

export default Main
