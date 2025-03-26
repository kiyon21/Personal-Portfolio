import pinpointlogo from '../img/PINpoint-Logo-JPEG-1.jpg';
import awlogo from '../img/Audioworks.jpeg';
import mnplogo from '../img/MNPlogo.png';
import yzslogo from '../img/yzs.png';

export const getCompanyLogo = (companyName: string): string => {
  const logoMapping: { [key: string]: string } = {
    'PINpoint Information Systems': pinpointlogo,
    'Audioworks Technologies': awlogo,
    'MNP Digital': mnplogo,
    'Year Zero Studios': yzslogo
  };

  return logoMapping[companyName] || '';
}; 