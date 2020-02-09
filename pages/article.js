import { Fragment } from 'react'
import Header from '../components/header'
import ajax from 'plugins/ajax'
import formatApiUrl from 'utils/formatApiUrl'
import moment from 'moment'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import markdownStyle from 'assets/markdown.scss'
import publicStyle from 'assets/public.scss'
import articleStyle from './article.scss'

const Article = ({ article }) => {
    return (
        <Fragment>
            <Header />
            <div className={articleStyle.article}>
                <h1 className={articleStyle.title}>{article.title}</h1>
                <div className={articleStyle.article_info}>
                    <a className={[
                        articleStyle.info,
                        publicStyle.vertical_middle
                    ].join(' ')}>
                        <img className={articleStyle.user_avatar} src={article.author.avatar} />
                        <span className={articleStyle.user_name}>{article.author.name}</span>
                    </a>
                    <div className={articleStyle.meta}>2019-09-16 08:12</div>
                </div>
                <div className={[articleStyle.content, markdownStyle['markdown-body']].join(' ')} dangerouslySetInnerHTML={{__html: md.render(decodeURIComponent(atob(article.content || '')))}}>
                </div>
            </div>
        </Fragment>
    )
}

Article.getInitialProps = async ({ query }) => {
    const { data } = await ajax.get(formatApiUrl('/article/{id}', { id: query.id }))
    return {
        article: data || { author: {} }
    }
}

export default Article
