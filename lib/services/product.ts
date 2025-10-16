export const productService = {
  getRecommendations: async () => {
    // Fetch from API, with auth
    const response = await fetch('/api/product/recommendations', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.json();
  },
  // Other methods
};