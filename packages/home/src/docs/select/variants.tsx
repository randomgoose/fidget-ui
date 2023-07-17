import { Heading, Select, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

const OPTIONS: any[] = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
];

export default function SelectVariants() {
  return (
    <>
      <Heading as={'h5'}>Variants</Heading>

      <Tabs
        id="select/variants"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={480} direction="vertical" spacing={8}>
                {['filled', 'outline', 'flush'].map((variant) => (
                  <Select
                    id={'hu53'}
                    variant={variant as any}
                    key={variant}
                    placeholder="Select a letter"
                    width={128}
                    options={OPTIONS}
                  />
                ))}
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={480}>
                {`{['filled', 'outline', 'flush'].map((variant) => (
<Select
    id={'hu53'}
    variant={variant as any}
    key={variant}
    placeholder="Select a letter"
    width={128}
    options={OPTIONS}
/>
))}`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
