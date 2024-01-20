// import ReactGA from 'react-ga';
// import mixpanel from 'mixpanel-browser';

// Initialize analytics services
// ReactGA.initialize('YOUR_GOOGLE_ANALYTICS_ID');
// mixpanel.init('YOUR_MIXPANEL_ID');

interface ITrackEventProps {
  eventCategory: string;
  eventName: string;
  eventLabel: string;
}

const trackEvent = ({
  eventCategory,
  eventName,
  eventLabel,
}: ITrackEventProps) => {
  setTimeout(() => {
    // ReactGA.event({ category: eventCategory, action: eventName, label: eventLabel });
    // mixpanel.track(eventName, { category: eventCategory, label: eventLabel });
  }, 0);
};

export default { trackEvent };
