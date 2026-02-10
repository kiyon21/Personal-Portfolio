import pinpointlogo from '../img/PINpoint-Logo.png';
import awlogo from '../img/Audioworks.jpeg';
import mnplogo from '../img/mnpDigital.png';
import yzslogo from '../img/yzs.png';
import venuitilogo from '../img/VenuitiLogo.png';
import easierEmailsLogo from '../img/EasierEmailsLogo.png';

export const getCompanyLogo = (companyName: string): string => {
  const logoMapping: { [key: string]: string } = {
    'Easier Emails': easierEmailsLogo,
    'Venuiti Solutions Inc': venuitilogo,
    'PINpoint Information Systems': pinpointlogo,
    'Audioworks Technologies': awlogo,
    'MNP Digital': mnplogo,
    'Year Zero Studios': yzslogo
  };

  return logoMapping[companyName] || '';
}; 