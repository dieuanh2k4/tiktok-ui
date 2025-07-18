import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PropperWrapper } from '~/components/Propper';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItem = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      interactive
      delay={[0, 800]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PropperWrapper className={cx('menu-popper')}>{renderItem()}</PropperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
