import { Button } from 'fidget-ui';
import { IconAcademicCap } from 'fidget-ui/icons';

export function ButtonWithIcon() {
  return (
    <>
      <Button leftIcon={<IconAcademicCap />}>Share</Button>
      <Button rightIcon={<IconAcademicCap />} variant={'outline'} colorScheme={'blue'}>
        Share
      </Button>
    </>
  );
}
