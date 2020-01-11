interface IRelatedServiceItem {
  label: string;
  link: string;
}

console.log('window.location.host: ', window.location.host);
export const relatedServicesList: IRelatedServiceItem[] = [
  {
    label: 'inquiry.title',
    link: '/adc/declaration/landing',
  },
  {
    label: 'extendDeposit.title',
    link: '/adc/extend-deposit/landing',
  },
  {
    label: 'generalAdminCustomsServices.landing.title',
    link: window.location.host === 'stage' ? '/demo' : '/test',
  },
];
