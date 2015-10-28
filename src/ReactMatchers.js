import React from 'react';

const makeProps = (props)=> {
  const nprops = Object.assign({}, props);
  delete nprops.children;
  return nprops;
};

const makeChildren = (children)=> {
  if (Array.isArray(children)) {
    return children;
  }
  return [children];
};

const areElementsEq = (actual, expected, eq, testers)=> {
  if (!eq(actual.type, expected.type, testers)) {
    return false;
  }
  if (!eq(makeProps(actual.props), makeProps(expected.props), testers)) {
    return false;
  }
  const actChildren = makeChildren(actual.props.children);
  const expChildren = makeChildren(expected.props.children);
  for (let idx = 0; idx < actChildren.length; idx++) {
    const ac = actChildren[idx];
    const ex = expChildren[idx];
    if (React.isValidElement(ac)) {
      if (!areElementsEq(ac, ex, eq, testers)) {
        return false;
      }
    } else {
      if (!eq(ac, ex, testers)) {
        return false;
      }
    }
  }
  return true;
};

export default {
  toEqualElement(util, testers) {
    return {
      compare(actual, expected) {
        const res = {};
        res.pass = areElementsEq(actual, expected, util.equals, testers);
        return res;
      },
    };
  },
};

