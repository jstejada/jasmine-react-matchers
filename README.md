# Jasmine React Matchers

Custom Jasmine matchers to assert and compare React Elements.


## Install
```shell
npm install jasmine-react-matchers --save
```


## Description
It makes sure that each the elements have the same:
- `type`
- `props`
- `children`

It ignores the `key` and any other property associated with the Element.


## Usage
```jsx
import ReactMatchers from 'jasmine-react-matchers';

describe('MyTest', ()=> {
    beforeEach(()=> {
      // Add here
      jasmine.addMatchers(ReactMatchers));
    }

  it('does something', ()=> {
    const actual = <div className="C">T</div>;
    const expected = <div className="C">T</div>;
    // Use here
    expect(actual).toEqualElement(expected);
  });
});
```

Refer to [`test/`](/test) for more examples.


## Development

Run tests:
```shell
npm test
```


## License

[MIT](http://mit-license.org)
