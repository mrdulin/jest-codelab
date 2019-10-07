(window as any).rg_version = '';

export function ABTest(debugMode = false) {
  const roll = Math.floor(Math.random() * 100);
  let ABTestValue = 30;

  if (debugMode) {
    console.log(
      'TimedRefresh - AB Test Issue-831 (90 and above get their refresh time changed) randomized value = ',
      roll
    );
  }

  const ABTestMappings = [
    {
      roll: 90,
      ABTestValue: 40
    },
    {
      roll: 91,
      ABTestValue: 40
    },
    {
      roll: 92,
      ABTestValue: 50
    },
    {
      roll: 93,
      ABTestValue: 50
    },
    {
      roll: 94,
      ABTestValue: 60
    },
    {
      roll: 95,
      ABTestValue: 60
    },
    {
      roll: 96,
      ABTestValue: 70
    },
    {
      roll: 97,
      ABTestValue: 70
    },
    {
      roll: 98,
      ABTestValue: 80
    },
    {
      roll: 99,
      ABTestValue: 80
    }
  ];

  if (roll > 89 && roll < 100) {
    ABTestValue = ABTestMappings.filter(a => a.roll === roll)[0].ABTestValue;
  }

  (window as any).rg_version = `time${ABTestValue}`;

  if (debugMode) {
    console.log('TimedRefresh - ABTestValue - change in refresh time in seconds (30 is default) - ', ABTestValue);
  }
}
