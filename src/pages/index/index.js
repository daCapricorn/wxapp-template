import Base from '../base';

class Home extends Base {
  data = {
    motto: 'Hello World',
  };

  onLoad() {
    super.onLoad();

    this.context.setData({ motto: 'onLoad' });
  }

  bindViewTap = () => {
    this.context.setData({ motto: 'onTap' });
  }
}

Home.newPage();
