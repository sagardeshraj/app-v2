export const userService = {
  getPreferences: async () => {
    // Fetch from User API/Firestore
    const response = await fetch('/api/user/preferences', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.json();
  },
  updatePreferences: async (prefs: object) => {
    await fetch('/api/user/preferences', {
      method: 'PUT',
      body: JSON.stringify(prefs),
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },
  // Other methods: signOut, etc.
};