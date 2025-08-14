export default function Features() {
    const features = [
        {
            id: 1,
            title: 'Feature 1',
            description: 'Description 1',
            available: true
        },
        {
            id: 2,
            title: 'Feature 2',
            description: 'Description 2',
        },
        {
            id: 3,
            title: 'Feature 3',
            description: 'Description 3'
        },
        {
            id: 4,
            title: 'Feature 4',
            description: 'Description 4'
        },
        {
            id: 5,
            title: 'Feature 5',
            description: 'Description 5'
        }
    ]
  return (
    <div>
        <h1>Features</h1>
        <ul>
            {features.map((feature) => (
                <li key={feature.id}>{feature.title}
                    <p>{feature.description}</p>
                    <p>{feature.available ? 'Available' : 'Not Available'}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}