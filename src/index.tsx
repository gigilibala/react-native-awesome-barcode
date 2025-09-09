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
  changeSvgAttrs?: Record<string, string | null>;
} & Omit<JsBarcode.Options, 'xmlDocument'>;

export function Barcode({
  value,
  onError,
  changeSvgAttrs,
  ...options
}: BarcodeProps) {
  const svgText = barcodeSvg(value, options, onError, {
    width: null,
    ...changeSvgAttrs,
  });
  return <SvgXml xml={svgText} onError={onError} width={'100%'} />;
}

export function barcodeSvg(
  value: string,
  options?: JsBarcode.Options,
  onError?: (error: Error) => void,
  changeSvgAttrs?: Record<string, string | null>
) {
  try {
    const svgNode = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    JsBarcode(svgNode, value, { ...options, xmlDocument: document });

    for (const [key, value] of Object.entries(changeSvgAttrs ?? {})) {
      if (value == null) {
        svgNode.removeAttribute(key);
      } else {
        svgNode.setAttribute(key, value);
      }
    }

    return xmlSerializer.serializeToString(svgNode);
  } catch (e) {
    onError?.(e as Error);
    return '';
  }
}
