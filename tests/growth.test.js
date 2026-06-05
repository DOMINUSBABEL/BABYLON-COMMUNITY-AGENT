const { getTargetNicheAccounts } = require('../skills/follow-bot/growth_algorithm');
test('has target list', () => {
    expect(getTargetNicheAccounts().length).toBe(3);
});