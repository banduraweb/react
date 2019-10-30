import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="header">
                    <div className="header__logo"><img src="images/logo.png" height="40" width="40" alt="MOYO"/>
                    </div>
                    <div>
                        <ul className="menu__items">
                            <li className="item"><a className="is-active" href="#">APPLE</a></li>
                            <li className="item"><a className="link" href="#">Samsung</a></li>
                            <li className="item"><a className="link" href="#">Смартфоны и телефоны</a></li>
                            <li className="item" data-qa="hover"><a href="#"><a className="link" href="#">Ноутбуки и
                                компьютеры</a></a></li>
                            <li className="item"><a className="link" href="#">Гаджеты</a></li>
                            <li className="item"><a className="link" href="#">Планшеты</a></li>
                            <li className="item"><a className="link" href="#">ФОТО</a></li>
                            <li className="item"><a className="link" href="#">ВИДЕО</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
