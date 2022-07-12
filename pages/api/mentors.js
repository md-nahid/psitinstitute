export default function mentors(req, res) {
  res.status(200).json(mentorsData);
}

const mentorsData = [
  {
    id: '0001',
    name: 'ps abu bokkor',
    expert: 'basic computer, Graphic-Design, Digital-Marketing',
    picPath: '/images/psabubokkor.png',
  },
  {
    id: '0002',
    name: 'ps abu bokkor',
    expert: 'basic computer',
    picPath: '/images/mousumi.png',
  },
];
