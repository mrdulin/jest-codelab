export const handleDelete = (action) => {
  const { id, type, actions } = action;
  const Dialog = 'Dialog';

  actions.dispatch(
    actions.openDialog(`delete${type}`, Dialog, {
      onSuccess: () => {
        actions.dispatch(actions.thunk(id));
        actions.notify(`${type} deleted`, {
          variant: 'success',
        });
      },
      body: `Are you sure you want to delete this ${type}?`,
      title: `Delete ${type}`,
      confirm: 'Delete',
      cancel: 'Cancel',
      danger: true,
    }),
  );
};
