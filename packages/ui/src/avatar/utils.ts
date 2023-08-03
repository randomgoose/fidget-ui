export const NODE_NAME_MAP = {
  avatar: 'Avatar',
  avatarGroup: 'Avatar Group',
  excessLabel: 'Avatar Group Excess Label',
};

export function getInitials(str: string | undefined) {
  return str
    ? str
        ?.split(/\s+/)
        .map((word) => word[0])
        .join('') || ''
    : undefined;
}

export const isAvatar = (node: any) => {
  return node.props?.name?.startsWith('Avatar');
};
