import React from 'react';
import ReactMatchers from 'ReactMatchers';

describe('ReactMatchers', ()=> {
  beforeEach(()=> jasmine.addMatchers(ReactMatchers));

  it('compares correctly when same elements', ()=> {
    const actual = <div className="C">T</div>;
    const expected = <div className="C">T</div>;
    expect(actual).toEqualElement(expected);
  });

  it('compares correctly when same nested elements', ()=> {
    const actual = (
      <div className="c">
        T1
        <div><span className="s">T2</span>T3</div>
        <p>
          <span>T4</span>
          <br />
        </p>
        <div>T5</div>
      </div>
    );
    const expected = (
      <div className="c">
        T1
        <div><span className="s">T2</span>T3</div>
        <p>
          <span>T4</span>
          <br />
        </p>
        <div>T5</div>
      </div>
    );
    expect(actual).toEqualElement(expected);
  });

  it('compares correctly when using React Components', ()=> {
    const MyComp = React.createClass({
      render() {
        return <div>MyComp</div>;
      },
    });

    const actual = <MyComp className="C">T</MyComp>;
    const expected = <MyComp className="C">T</MyComp>;
    expect(actual).toEqualElement(expected);
  });

  it('compares correctly when not same props', ()=> {
    const actual = <div className="C">T</div>;
    const expected = <div className="K">T</div>;
    expect(actual).not.toEqualElement(expected);
  });

  it('compares correctly when not same children', ()=> {
    const actual = <div className="C">T</div>;
    const expected = <div className="C">R</div>;
    expect(actual).not.toEqualElement(expected);
  });

  it('compares correctly when not same type', ()=> {
    const actual = <div className="C">T</div>;
    const expected = <span className="C">T</span>;
    expect(actual).not.toEqualElement(expected);
  });
});
