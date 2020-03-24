import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import logo from '../logo.jpg';

const PageShell = Page => {
  return props =>
    <div className="page">
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnterTimeout={10000}
        transitionLeaveTimeout={10000}
        transitionName={props.match.path === '/thanks' ? 'SlideIn' : 'SlideOut'}
      >
        <Page {...props} />
      </CSSTransitionGroup>
    </div>;
};

export default PageShell;