import Link from 'next/link'
import articleStyle from './article.scss'

export default ({ data }) => {
    return (
        <div className={[
            articleStyle.article
        ].join(' ')}>
            <Link href={`/article/${data._id}`}>
                <a className={[
                    articleStyle.content,
                    articleStyle.has_pic
                ].join(' ')}>
                    <div className={articleStyle.summary}>
                        <h6 className={articleStyle.title}>{data.title}</h6>
                        <p className={articleStyle.abstract}>今年夏天真是热力Max，不仅有吃不完的瓜还有超长待机中的暑气。 空调+冰镇西瓜成了续命法宝，煲剧自然也是不能落下的...</p>
                    </div>
                    <span className={articleStyle.img_wrapper}>
                        <img src="/article.jpg" />
                    </span>
                </a>
            </Link>
            <div className={articleStyle.meta}>{data.author.name}</div>
        </div>
    )
}
