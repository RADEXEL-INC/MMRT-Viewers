export const getDicomToken = async () => {
  const response = await fetch('https://dev-mmrt-be.azurewebsites.net/api/v0/dicom_token', {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  sessionStorage.setItem('dicom_auth_token', data.access_token);
};
