import { TextField, Select } from 'fidget-ui';

export function InputAddons() {
  return (
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
  );
}
