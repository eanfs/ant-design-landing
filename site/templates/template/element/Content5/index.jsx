import React from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
/* replace-start */
import './index.less';
/* replace-end */

class Content5 extends React.PureComponent {
  getChildrenToRender = data => data.map((item) => {
    return (
      <Col
        key={item.name}
        {...item}
        /* replace-start */
        data-edit="Col"
      /* replace-end */
      >
        <div {...item.children.wrapper}>
          <span {...item.children.img}>
            <img src={item.children.img.children} height="100%" alt="img" />
          </span>
          <p {...item.children.content}>
            {
              /* replace-start-value = item.children.content.children */
              React.createElement('span', { dangerouslySetInnerHTML: { __html: item.children.content.children } })
              /* replace-end-value */
            }
          </p>
        </div>
      </Col>
    );
  });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(dataSource.block.children);
    return (
      <div
        {...props}
        {...dataSource.wrapper}
      >
        <div {...dataSource.page}>
          <div
            key="title"
            {...dataSource.titleWrapper}
            /* replace-start */
            data-edit="titleWrapper"
          /* replace-end */
          >
            {
              dataSource.titleWrapper.children.map((item, i) => (
                React.createElement(item.name.indexOf('title') === 0 ? 'h1' : 'div', { key: i.toString(), ...item }, (
                  typeof item.children === 'string' && item.children.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/)
                    ? React.createElement('img', { src: item.children, alt: 'img' })
                    : /* replace-start-value = item.children */React.createElement('span', { dangerouslySetInnerHTML: { __html: item.children } })
                  /* replace-end-value */
                ))
              ))
            }
          </div>
          <OverPack
            className={`content-template ${props.className}`}
            {...dataSource.OverPack}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeInOutQuad' }}
              leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
              {...dataSource.block}
              /* replace-start */
              data-edit="Row"
            /* replace-end */
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    );
  }
}


export default Content5;
