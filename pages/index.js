import { Fragment } from 'react'
import Header from '../components/header'
import Article from '../components/article'

import mainStyle from './index.scss'

export default () => {
    return (
        <Fragment>
            <Header />
            <div className={[
                mainStyle.main
            ].join(' ')}>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </Fragment>
    )
}
