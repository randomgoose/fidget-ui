import { TextField, Heading, Select, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export default function InputAddons() {
  return (
    <>
      <Heading as="h5">Addons</Heading>

      <Tabs
        id="text-field/input-addons"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} direction="vertical" spacing={8}>
                <TextField
                  width={480}
                  id="84n2"
                  value={''}
                  onTextEditEnd={() => {}}
                  addonLeft={'https://'}
                  addonRight={
                    <Select
                      placement="top"
                      id="text-field/addon"
                      options={[
                        { label: '.com', value: '.com' },
                        { label: '.app', value: '.app' },
                        { label: '.info', value: '.info' },
                      ]}
                      placeholder={'select'}
                      variant={'filled'}
                      width={72}
                      size={'sm'}
                    />
                  }
                  placeholder={'Your website'}
                />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<TextField
    width={480}
    id="84n2"
    value={''}
    onTextEditEnd={() => { }}
    addonLeft={'https://'}
    addonRight={
        <Select
            placement="top"
            id="text-field/addon"
            options={[
                { label: '.com', value: '.com' },
                { label: '.app', value: '.app' },
                { label: '.info', value: '.info' },
            ]}
            placeholder={'select'}
            variant={'filled'}
            width={72}
            size={'sm'}
        />
    }
    placeholder={'Your website'}
/>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}
