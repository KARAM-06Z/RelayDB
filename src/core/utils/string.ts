const pluralForm = (count: number, text: string): string => {
  const rule = new Intl.PluralRules('en-US').select(count)
  return rule === 'one' ? text : `${text}s`
}

export { pluralForm }
