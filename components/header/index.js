import Logo from '../logo'

import publicStyle from '../../assets/public.scss'
import headerStyle from './header.scss'

export default () => {
    return (
        <div className={[
            publicStyle.vertical_middle,
            headerStyle.header
        ].join(' ')}>
            <Logo className={headerStyle.logo} />
            <span className={headerStyle.tip}>写你想说</span>
        </div>
    )
}
