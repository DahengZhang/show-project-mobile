import logoStyle from './logo.scss'

export default ({ className }) => {
    return (
        <div className={[
            logoStyle.logo,
            className && className
        ].join(' ')}>
            简说
        </div>
    )
}
