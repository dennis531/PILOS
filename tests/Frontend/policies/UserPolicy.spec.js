import UserPolicy from '../../../resources/js/policies/UserPolicy';

describe('UserPolicy', () => {
  it('viewAny returns true if the user has the permission to view all users', async () => {
    expect(UserPolicy.viewAny({ currentUser: { permissions: [] } })).toBe(false);
    expect(UserPolicy.viewAny({ currentUser: { permissions: ['users.viewAny'] } })).toBe(true);
  });

  it('view returns true if the user has permission to view users or the user model to view is the own user', async () => {
    expect(UserPolicy.view({ }, { id: 1337, model_name: 'User' })).toBe(false);
    expect(UserPolicy.view({ currentUser: { permissions: [], id: 1 } }, { id: 1337, model_name: 'User' })).toBe(false);
    expect(UserPolicy.view({ currentUser: { permissions: [], id: 1 } }, { id: 1, model_name: 'User' })).toBe(true);
    expect(UserPolicy.view({ currentUser: { permissions: ['users.view'], id: 1 } }, { id: 1337, model_name: 'User' })).toBe(true);
  });

  it('view returns true if the user has permission to create users', async () => {
    expect(UserPolicy.create({ currentUser: { permissions: [], id: 1 } })).toBe(false);
    expect(UserPolicy.create({ currentUser: { permissions: ['users.create'], id: 1 } })).toBe(true);
  });

  it('update returns true if the user has permission to update users or the user model to update is the own user', async () => {
    expect(UserPolicy.update({ }, { id: 1337, model_name: 'User' })).toBe(false);
    expect(UserPolicy.update({ currentUser: { permissions: [], id: 1 } }, { id: 1337, model_name: 'User' })).toBe(false);
    expect(UserPolicy.update({ currentUser: { permissions: [], id: 1 } }, { id: 1, model_name: 'User' })).toBe(true);
    expect(UserPolicy.update({ currentUser: { permissions: ['users.update'], id: 1 } }, { id: 1337, model_name: 'User' })).toBe(true);
  });

  it('delete returns true if the user has permission to delete users and the user model to delete is not the own user', async () => {
    expect(UserPolicy.delete({ currentUser: { permissions: [], id: 1 } }, { id: 1337, model_name: 'User' })).toBe(false);
    expect(UserPolicy.delete({ currentUser: { permissions: [], id: 1 } }, { id: 1, model_name: 'User' })).toBe(false);
    expect(UserPolicy.delete({ currentUser: { permissions: ['users.delete'], id: 1 } }, { id: 1, model_name: 'User' })).toBe(false);
    expect(UserPolicy.delete({ currentUser: { permissions: ['users.delete'], id: 1 } }, { id: 1337, model_name: 'User' })).toBe(true);
  });

  it('editUserRole returns true if the user has permission to update users and the user model to update is not the own user', async () => {
    expect(UserPolicy.editUserRole({ currentUser: { permissions: [], id: 1 } }, { id: 1337, model_name: 'User' })).toBe(false);
    expect(UserPolicy.editUserRole({ currentUser: { permissions: [], id: 1 } }, { id: 1, model_name: 'User' })).toBe(false);
    expect(UserPolicy.editUserRole({ currentUser: { permissions: ['users.update'], id: 1 } }, { id: 1, model_name: 'User' })).toBe(false);
    expect(UserPolicy.editUserRole({ currentUser: { permissions: ['users.update'], id: 1 } }, { id: 1337, model_name: 'User' })).toBe(true);
  });

  it('updateAttributes return true if the user has permission to update own attributes or the model to update is not the own user', async () => {
    expect(UserPolicy.updateAttributes({ currentUser: null }, { id: 1337, model_name: 'User', authenticator: 'local' })).toBe(false);
    expect(UserPolicy.updateAttributes({ currentUser: null }, { id: 1, model_name: 'User', authenticator: 'local' })).toBe(false);
    expect(UserPolicy.updateAttributes({ currentUser: { permissions: [], id: 1 } }, { id: 1337, model_name: 'User', authenticator: 'local' })).toBe(false);
    expect(UserPolicy.updateAttributes({ currentUser: { permissions: [], id: 1 } }, { id: 1, model_name: 'User', authenticator: 'local' })).toBe(false);
    expect(UserPolicy.updateAttributes({ currentUser: { permissions: ['users.update'], id: 1 } }, { id: 1337, model_name: 'User', authenticator: 'local' })).toBe(true);
    expect(UserPolicy.updateAttributes({ currentUser: { permissions: ['users.update'], id: 1 } }, { id: 1, model_name: 'User', authenticator: 'local' })).toBe(false);
    expect(UserPolicy.updateAttributes({ currentUser: { permissions: ['users.update', 'users.updateOwnAttributes'], id: 1 } }, { id: 1, model_name: 'User', authenticator: 'local' })).toBe(true);
    expect(UserPolicy.updateAttributes({ currentUser: { permissions: ['users.update', 'users.updateOwnAttributes'], id: 1 } }, { id: 1337, model_name: 'User', authenticator: 'external' })).toBe(false);
    expect(UserPolicy.updateAttributes({ currentUser: { permissions: ['users.update', 'users.updateOwnAttributes'], id: 1 } }, { id: 1, model_name: 'User', authenticator: 'external' })).toBe(false);
  });

  it('resetPassword returns true if the user has the permission to update the user and the user is has no initial password set and is not the current user', async () => {
    expect(UserPolicy.resetPassword({ }, { id: 1337, model_name: 'User' })).toBe(false);
    expect(UserPolicy.resetPassword({ currentUser: { permissions: [], id: 1 } }, { id: 1337, model_name: 'User' })).toBe(false);
    expect(UserPolicy.resetPassword({ currentUser: { permissions: ['users.update'], id: 1 } }, { id: 1337, model_name: 'User' })).toBe(false);
    expect(UserPolicy.resetPassword({ currentUser: { permissions: ['users.update'], id: 1 } }, { id: 1, model_name: 'User', authenticator: 'local' })).toBe(false);
    expect(UserPolicy.resetPassword({ currentUser: { permissions: ['users.update'], id: 1 } }, { id: 1337, model_name: 'User', authenticator: 'local', initial_password_set: true })).toBe(false);
    expect(UserPolicy.resetPassword({ currentUser: { permissions: ['users.update'], id: 1 } }, { id: 1337, model_name: 'User', authenticator: 'local' })).toBe(true);
  });
});
