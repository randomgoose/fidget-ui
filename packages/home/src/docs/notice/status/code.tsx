import { Notice } from 'fidget-ui';

export function NoticeStatus() {
  return (
    <>
      <Notice>Component updates available!</Notice>
      <Notice status="success">Components updated successfully!</Notice>
      <Notice status="warning">Update components to resolve this issue.</Notice>
      <Notice status="error">Component updates failed. Check your network.</Notice>
    </>
  );
}
