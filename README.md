# react-native-awesome-barcode

A react native library for generating barcodes.

- It uses [JsBarcode](https://github.com/lindell/JsBarcode) and is fully compatible with JsBarcode.
- It uses [react-native-svg](https://github.com/software-mansion/react-native-svg) to render the barcodes.
- It is written in typescript.

![example1](example/assets/example2.png)


## Installation

```sh
yarn add react-native-svg react-native-awesome-barcode
```

## Usage

For the list of options that can be passed to the `Barcode` component, see the [JsBarcode documentation](https://github.com/lindell/JsBarcode).

To use the JSX components, you can import them from the library package like so:

```ts
import { Barcode } from 'react-native-awesome-barcode';

// ...

<Barcode value={'Hello World!'}  />

```

To get the SVG text, you can use the `barcodeSvg` function:

```ts
import { barcodeSvg } from 'react-native-awesome-barcode';

// ...

const svgText = barcodeSvg('Hello World!');

```

##  Run example app

To run the example app do:

```sh
yarn example start
```

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
