const alerts = [];

// Set Alert
export const setAlert = ({ msg, alertType, id }) => {
  alerts.push({ msg, alertType, id });
  console.log('alerts', alerts);
};

// Get all Alert
export const getAlerts = () => alerts;

// Delete Alert by Id
export const deleteAlert = ({ id }) => {
  alerts.filter((alert) => alert.id !== id);
};
