import Link from 'next/link'
import { Component } from 'react'
import { connect } from 'react-redux'
import localStore from 'utils/localStore'
import Logo from 'components/logo'

import publicStyle from 'assets/public.scss'
import headerStyle from './header.scss'

class Header extends Component {

    constructor (props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    render () {
        return (
            <div className={[
                publicStyle.vertical_middle,
                headerStyle.header
            ].join(' ')}>
                <Logo className={headerStyle.logo} />
                <span className={headerStyle.tip}>写你想说</span>
                {
                    this.props.name
                    ? <div onClick={this.logout} className={[headerStyle.user, publicStyle.vertical_middle].join(' ')}>
                        <img className={headerStyle.avatar} src={this.props.avatar} alt={this.props.name} />
                    </div>
                    : <a href={`http://passport.dahengzhang.show`} className={[headerStyle.sign_in, publicStyle.vertical_middle].join(' ')}>
                        <span>登录</span>
                    </a>
                }
            </div>
        )
    }

    logout () {
        localStore.removeItem('user')
        localStore.removeItem('token')
        window.location.reload()
    }
}

const mapStateToProps = state => {
    return {
        name: state.user.name,
        avatar: state.user.avatar
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
