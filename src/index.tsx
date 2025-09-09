import JsBarcode from 'jsbarcode';
import { SvgXml } from 'react-native-svg';

import { DOMImplementation, XMLSerializer } from 'xmldom';

const xmlSerializer = new XMLSerializer();
const document = new DOMImplementation().createDocument(
  'http://www.w3.org/1999/xhtml',
  'html',
  null
);

type BarcodeProps = {
  value: string;
  onError?: (error: Error) => void;
} & Omit<JsBarcode.Options, 'xmlDocument'>;

export function Barcode({ value, onError, ...options }: BarcodeProps) {
  const svgText = barcodeSvg(value, onError, options);
  return <SvgXml xml={svgText} onError={onError} width={'100%'} />;
}

export function barcodeSvg(
  value: string,
  onError?: (error: Error) => void,
  options?: JsBarcode.Options
) {
  try {
    const svgNode = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    JsBarcode(svgNode, value, { ...options, xmlDocument: document });
    return xmlSerializer.serializeToString(svgNode);
  } catch (e) {
    onError?.(e as Error);
    return '';
  }
}
