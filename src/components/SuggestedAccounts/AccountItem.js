import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PropperWrapper>
          <AccountPreview />
        </PropperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f3a7a6e24149e89a9412e8869c2d5c2a~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=2207d410&x-expires=1753884000&x-signature=1zCam5Eu9ypTsdDJGQI34%2Faqm8w%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
            alt=""
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>nguyenvana</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Nguyen Van A</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
