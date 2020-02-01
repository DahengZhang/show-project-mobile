import { Fragment } from 'react'
import Header from '../components/header'

import publicStyle from '../assets/public.scss'
import articleStyle from './article.scss'

export default () => {
    return (
        <Fragment>
            <Header />
            <div className={articleStyle.article}>
                <h1 className={articleStyle.title}>【Vicky's电影/电视剧推荐】我是大哥大 今日から俺は#1！！</h1>
                <div className={articleStyle.article_info}>
                    <a className={[
                        articleStyle.info,
                        publicStyle.vertical_middle
                    ].join(' ')}>
                        <img className={articleStyle.user_avatar} src="/header.jpg" />
                        <span className={articleStyle.user_name}>冰冰的小城堡</span>
                    </a>
                    <div className={articleStyle.meta}>2019-09-16 08:12</div>
                </div>
                <div className={articleStyle.content}>
                    <img className={articleStyle.article_pic} src="/picture.jpg" />
                </div>
            </div>
        </Fragment>
    )
}
