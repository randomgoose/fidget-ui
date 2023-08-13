import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { SelectPlacement } from './code';

export default function () {
  return (
    <>
      <P>
        You may notice some of the poppers are blocked by elements below. This is because the
        default canvas stacking order in Figma widets is "last on top".
      </P>

      <P>
        In this case, you can set the <Pre>placement</Pre> prop as <Pre>top</Pre> to place the
        popper on the other side.
      </P>

      <Preview id="select/placement" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <SelectPlacement />
        </Case>
      </Preview>
    </>
  );
}
