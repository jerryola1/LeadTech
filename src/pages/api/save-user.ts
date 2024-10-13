import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email } = req.body;
      
      // TODO: Implement your database saving logic here
      // For now, we'll just log the data
      console.log('Received user data:', { firstName, lastName, email });

      // Simulate a successful save
      res.status(200).json({ message: 'User data saved successfully' });
    } catch (error) {
      console.error('Error in save-user API:', error);
      res.status(500).json({ 
        message: 'Error saving user data', 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
