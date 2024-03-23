export const getStatusColor = (status: 'dead' | 'alive') => {
  switch (status) {
    case 'dead':
      return 'red';
    case 'alive':
      return 'green';
    default:
      return 'gray';
  }
};
