const mapping: Record<string, string> = {
  budgets: 'budget',
  expenses: 'expense',
  incomes: 'income',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
