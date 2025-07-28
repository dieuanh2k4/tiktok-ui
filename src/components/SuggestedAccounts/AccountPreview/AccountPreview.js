import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f3a7a6e24149e89a9412e8869c2d5c2a~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=2207d410&x-expires=1753884000&x-signature=1zCam5Eu9ypTsdDJGQI34%2Faqm8w%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
          alt=""
        />
        <Button primary className={cx('follow-btn')}>
          Follow
        </Button>
      </div>

      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>nguyenvana</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Nguyen Van A</p>
      </div>

      <p className={cx('analytics')}>
        <strong className={cx('value')}>8.2M </strong>
        <span className={cx('label')}>Followers</span>
        <strong className={cx('value')}>8.2M </strong>
        <span className={cx('label')}>Followers</span>
      </p>
    </div>
  );
}

export default AccountPreview;
