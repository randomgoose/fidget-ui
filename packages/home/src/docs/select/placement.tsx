import { Select, Tabs } from 'fidget-ui';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

const OPTIONS: any[] = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
];

export default function SelectPlacement() {
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

      <Tabs
        id="select/placement"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <Select
                  id={'bu4k'}
                  placeholder="Select a letter"
                  width={240}
                  options={OPTIONS}
                  placement={'top'}
                />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code>
                {`<Select
    id={'bu4k'}
    placeholder="Select a letter"
    width={240}
    options={OPTIONS}
    placement={'top'}
/>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
