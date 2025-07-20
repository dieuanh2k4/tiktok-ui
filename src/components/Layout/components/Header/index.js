import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PropperWrapper } from '~/components/Propper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Propper/Menu';
import { MessageIcon, UploadIcon, ActivityIcon, SearchIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedbach and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboad shortcuts',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 1000);
  }, []);

  const handleMenuChange = (menuItem) => {
    // console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View Profile',
      to: '/@nguyenvana',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coin',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separates: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PropperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PropperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search account and video" spellCheck="false" />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 80]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 80]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 80]} content="Activity" placement="bottom">
                <button className={cx('action-btn')}>
                  <ActivityIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/abbfc6f992f3c98236c3103bc2f3b631~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=6ecabb1c&x-expires=1753084800&x-signature=3AA43nzQ38iaoX8KFTLvzgAR51M%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                className={cx('user-avatar')}
                alt="NguyenVanA"
                // fallback="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
